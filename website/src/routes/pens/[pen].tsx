import { For, JSX } from 'solid-js';
import { createRouteData, RouteDataArgs, Title, useRouteData } from 'solid-start';
import { groq, sanityClient } from '~/sanity/client';
import { PenInterface } from './Pen';
import { toHTML } from '@portabletext/to-html';
import { createServerData$ } from 'solid-start/server';
import Codepen from '~/components/Common/Codepen';

const query = (slug: string) => groq`*
  [_type == "pen" && slug.current == "${slug}"]
  [0]
  {
    _id,
    title,
    description,
    "slug": slug.current,
    thumbnail,
    content
  }
`;

const getPen = async (slug: string) => await sanityClient.fetch<PenInterface>(query(slug));

export function routeData({ params }: RouteDataArgs) {
  return createRouteData(
    async (pen) => {
      return await getPen(pen);
    },
    {
      name: 'pen',
      key: () => params.pen,
      reconcileOptions: {
        key: '_id',
      },
    },
  );
}

export default function PenDetail(): JSX.Element {
  const pen = useRouteData<typeof routeData>();
  return (
    <>
      {pen() && (
        <>
          <Title>Codepen - ${pen()!.title}</Title>
          <h3>{pen()!.title}</h3>
          <For each={pen()!.content}>
            {(item) => {
              if ('_type' in item && item._type === 'portableText') {
                return <div innerHTML={toHTML(item.blocks)} />;
              }
              if ('codepenId' in item) {
                return <Codepen id={item.codepenId} />;
              }
            }}
          </For>
        </>
      )}
    </>
  );
}
