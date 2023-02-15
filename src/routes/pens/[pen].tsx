import { createResource, For, JSX } from "solid-js";
import { RouteDataArgs, Title, useRouteData } from "solid-start";
import { dataset, groq, projectId, sanityClient } from "~/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { PenInterface } from "./Pen";
import { Image } from "sanity";
import {toHTML} from '@portabletext/to-html';

const query = (slug: string) => groq`*
  [_type == "pen" && slug.current == "${slug}"]
  [0]
  {
    title,
    description,
    "slug": slug.current,
    thumbnail,
    content
  }
`;

const getPen = async (slug: string) => await sanityClient.fetch<PenInterface>(query(slug));

const builder = imageUrlBuilder({
  clientConfig: {
    dataset,
    apiHost: 'https://cdn.sanity.io',
    projectId,
  }
});
const urlFor = (asset: Image) => builder.image(asset);

export function routeData({ params }: RouteDataArgs) {
  const [pen] = createResource(async () => {
    return await getPen(params.pen);
  });
 
  return { pen };
}

export default function PenDetail(): JSX.Element {
  const { pen } = useRouteData<typeof routeData>();
  return (
      pen() && (
        <>
          <Title>Codepen - ${pen()!.title}</Title>
          <h3>{pen()!.title}</h3>
          <For each={pen()!.content}>
            {
              (item) => {
                if ('_type' in item && item._type === 'portableText') {
                  return <div innerHTML={toHTML(item.blocks)} />
                }
                if ('codepenId' in item) {
                  return (
                    <iframe
                      height="300"
                      style={{width: '100%'}}
                      src={`https://codepen.io/wimbarelds/embed/${item.codepenId}?default-tab=result`}
                      allowfullscreen={true}
                      allowtransparency="true"
                      loading="lazy"
                      frameborder="no"
                      scrolling="no"
                    />
                  )
                }
              }
            }
          </For>
        </>
      )
  );
}