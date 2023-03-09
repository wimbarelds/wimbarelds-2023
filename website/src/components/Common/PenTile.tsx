import { PenInterface } from '~/routes/pens/Pen';
import { dataset, projectId } from '~/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from 'sanity';
import { A } from 'solid-start';
import { css } from 'solid-styled';

const builder = imageUrlBuilder({
  clientConfig: {
    dataset,
    apiHost: 'https://cdn.sanity.io',
    projectId,
  },
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
      color: var(--clr-p-50);
      text-decoration: none;
      gap: 5px;
      padding: 10px;
      transition: all 0.2s ease-in-out;
      border-radius: .5em;
    }
    a:hover {
      outline: solid var(--clr-p-400) 2px;
      outline-offset: -2px;
    }
    h3 {
      color: var(--clr-a-200);
      font-weight: 200;
    }
    p {
      display: flex;
      align-items: flex-start;
      flex: 1;
      text-align: left;
      color: var(--clr-mono-400);
      font-size: 80%;
    }
    img {
      width: 100%;
      height: 120px;
      object-fit: cover;
    }
  `;
  return (
    <A href={`/pens/${props.pen.slug}`} use:solid-styled>
      <h3>{props.pen.title}</h3>
      <img src={urlFor(props.pen.thumbnail).size(200, 120).fit('max').toString()} alt="" />
      <p>{props.pen.description}</p>
    </A>
  );
}
