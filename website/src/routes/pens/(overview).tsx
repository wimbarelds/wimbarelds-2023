import { createResource, For, JSX } from 'solid-js';
import { Title, useRouteData } from 'solid-start';
import { groq, sanityClient } from '~/sanity/client';
import { PenInterface } from './Pen';
import PenTile from '~/components/Common/PenTile';
import { css } from 'solid-styled';

const query = groq`*
  [_type == "pen"]
  |order(_createdAt)
  [0...12]
  {
    title,
    description,
    "slug": slug.current,
    thumbnail,
    content
  }
`;

const getOverviewData = async () => await sanityClient.fetch<PenInterface[]>(query);

export function routeData() {
  const [pens] = createResource(async () => {
    return await getOverviewData();
  });

  return { pens };
}

export default function PensOverview(): JSX.Element {
  const { pens } = useRouteData<typeof routeData>();
  css`
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    li {
      display: flex;
      flex-direction: column;
    }
  `;
  return (
    <>
      <Title>Codepens</Title>
      <h2>Notable codepens</h2>
      <ul class="pens">
        <For each={pens()}>
          {(pen) => (
            <li>
              <PenTile pen={pen} />
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
