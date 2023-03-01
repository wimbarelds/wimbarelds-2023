import { type ImageAsset, type PortableTextBlock } from 'sanity';
import { groq, sanityClient } from '../client';

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
  };
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

const newHomeQuery = groq`*[_type == "page" && slug.current == "home"][0]`;

export const getHomeData = async () => await sanityClient.fetch<Home>(homeQuery);

type Document = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
};

type SlugField = { _type: 'slug'; current: string };
type StringField = string;
type NumberField = number;
type ArrayMember = { _key: string; _type?: string };

export type PortableTextModule = ArrayMember & {
  _type: 'module_richtext';
  blocks: PortableTextBlock[];
};
export type HeadingModule = ArrayMember & {
  _type: 'heading';
  level: NumberField;
  text: string;
};
export type ListModule = ArrayMember & {
  _type: 'list';
  items: string[];
  subtype: string;
};

export type PageSection = ArrayMember & {
  _type: 'section';
  id: 'splash' | 'about' | 'experience';
  section_title: StringField;
  section_modules: Array<PortableTextModule | HeadingModule | ListModule | PageSection>;
};

type NewHome = Document & {
  _type: 'page';
  slug: SlugField;
  title: StringField;
  sections: PageSection[];
};

export const getNewHomeData = async () => await sanityClient.fetch<NewHome>(newHomeQuery);
