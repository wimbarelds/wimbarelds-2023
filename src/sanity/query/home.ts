import { type ImageAsset, type PortableTextBlock } from "sanity";
import { groq, sanityClient } from "../client";

interface Home {
  title: string;
  hero: {
    picture: ImageAsset;
    me: {
      title: string;
      text: PortableTextBlock[];
    };
    website: {
      title: string;
      text: PortableTextBlock[];
    };
  };
  about: PortableTextBlock[];
  traits: {
    title: string;
    items: Array<{
      title: string;
      symbol: string;
      text: PortableTextBlock[];
    }>;
  };
  technologies: {
    title: string;
    items: string[];
  }
}

const homeQuery = groq`
  *[_type=="home"][0]{
    title,
    hero {
      "picture": picture.asset->,
      me {
        title,
        text,
      },
      website {
        title,
        text,
      },
    },
    about,
    traits {
      title,
      items[] {
        symbol,
        title,
        text
      }
    },
    technologies {
      title,
      items
    }
  }
`;

export const getHomeData = async () => await sanityClient.fetch<Home>(homeQuery);