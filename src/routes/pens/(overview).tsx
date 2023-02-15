import { createResource, For, JSX } from "solid-js";
import { A, Title, useRouteData } from "solid-start";
import { dataset, groq, projectId, sanityClient } from "~/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { PenInterface } from "./Pen";
import { Image } from "sanity";

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

const builder = imageUrlBuilder({
  clientConfig: {
    dataset,
    apiHost: 'https://cdn.sanity.io',
    projectId,
  }
});
const urlFor = (asset: Image) => builder.image(asset);

export function routeData() {
  const [pens] = createResource(async () => {
    return await getOverviewData();
  });
 
  return { pens };
}

export default function PensOverview(props: {}): JSX.Element {
  const { pens } = useRouteData<typeof routeData>();
  return (
    <>
      <Title>Codepens</Title>
      <h2>Notable codepens</h2>
      <ul class="pens">
        <For each={pens()}>
          {(pen) => (
            <li>
              <A href={`/pens/${pen.slug}`}>
                <h3>{pen.title}</h3>
                <img src={urlFor(pen.thumbnail).size(300, 200).toString()} alt="" />
                <p>{pen.description}</p>
              </A>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}