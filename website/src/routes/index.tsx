import { createMemo, createResource, For, JSX } from "solid-js";
import { useRouteData } from "solid-start";
import { getHomeData } from "~/sanity/query/home";

import imageUrlBuilder from '@sanity/image-url'
import {toHTML} from '@portabletext/to-html';
import { dataset, projectId } from "~/sanity/client";
import { ImageAsset } from "sanity";

import styles from './index.module.scss'

const builder = imageUrlBuilder({
  clientConfig: {
    dataset,
    apiHost: 'https://cdn.sanity.io',
    projectId,
  }
});

const urlFor = (asset: ImageAsset) => builder.image(asset);

interface HomeResolved {
  title: string;
  hero: {
    picture: string;
    me: {
      title: string;
      text: JSX.Element;
    };
    website: {
      title: string;
      text: JSX.Element;
    };
  };
  about: JSX.Element;
  traits: {
    title: string;
    items: Array<{
      title: string;
      symbol: JSX.Element;
      text: JSX.Element;
    }>;
  };
  technologies: {
    title: string;
    items: string[];
  }
}

export function routeData() {
  const [data] = createResource(async () => {
    return await getHomeData();
  });
 
  return { data };
}

export default function Home() {
  const { data } = useRouteData<typeof routeData>();
  const home = createMemo((): HomeResolved | null => {
    const resolved = data();
    if (!resolved) return null;
    const {title, hero, about, traits, technologies} = resolved;
    const result: HomeResolved = {
      title,
      hero: {
        picture: urlFor(hero.picture).size(150, 150).url(),
        website: {
          title: hero.website.title,
          text: <div innerHTML={toHTML(hero.website.text)} />,
        },
        me: {
          title: hero.me.title,
          text: <div innerHTML={toHTML(hero.me.text)} />,
        },
      },
      about: <div innerHTML={toHTML(about)} />,
      traits: {
        title: traits.title,
        items: traits.items.map(trait => ({
          ...trait,
          symbol: (
            <span class="material-symbols-outlined">{trait.symbol}</span>
          ),
          text: <div innerHTML={toHTML(trait.text)} />,
        }))
      },
      technologies,
    };
    return result;
  });
  return (
    <main>
      <section class={`${styles.section} ${styles.hero}`}>
        <div class={styles.img}>
          <img src={home()?.hero.picture ?? ''} alt="" />
        </div>
        <div class={styles.me}>
          <h1>{home()?.hero.me.title}</h1>
          {home()?.hero.me.text}
        </div>
        <div class={styles.website}>
          <h1>{home()?.hero.website.title}</h1>
          {home()?.hero.website.text}
        </div>
      </section>
      <section class={`${styles.section} ${styles.about}`}>
        {home()?.about}
      </section>
      <section class={`${styles.section} ${styles.traits}`}>
        <h2>{home()?.traits.title}</h2>
        <div class={styles.traits_items}>
          <For each={home()?.traits.items}>
            {(trait) => (
              <div class={styles.trait}>
                {trait.symbol}
                <h3>{trait.title}</h3>
                {trait.text}
              </div>
            )}
          </For>
          </div>
      </section>
      <section class={`${styles.section} ${styles.technologies}`}>
        <h2>{home()?.technologies.title}</h2>
        <div class={styles.technologies_list}>
          <For each={home()?.technologies.items}>
            {tech => <span class={styles.technologies_item}>{tech}</span>}
          </For>
        </div>
      </section>
    </main>
  );
}
