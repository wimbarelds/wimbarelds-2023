import { PenInterface } from "~/routes/pens/Pen";
import { dataset, projectId } from "~/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { Image } from "sanity";
import { A } from "solid-start";
import { css } from "solid-styled";

const builder = imageUrlBuilder({
  clientConfig: {
    dataset,
    apiHost: 'https://cdn.sanity.io',
    projectId,
  }
});
const urlFor = (asset: Image) => builder.image(asset);

// Wizard of frontend-foolery
interface PenTileInterface {
  pen: PenInterface;
}

export default function PenTile(props: PenTileInterface) {
  css`
    a {
      display: flex;
      flex-direction: column;
      background-color: #111;
      flex: 1;
      color: #FFF;
      text-decoration: none;
      gap: 5px;
      padding: 10px;
    }
    h3 {
      color: #FF0;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      text-align: center;
    }
  `
  return (
    <A href={`/pens/${props.pen.slug}`} use:solid-styled>
      <h3>{props.pen.title}</h3>
      <img src={urlFor(props.pen.thumbnail).size(300, 200).fit('max').toString()} alt="" />
      <p>{props.pen.description}</p>
    </A>
  );
}