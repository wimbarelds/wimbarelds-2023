import { PortableTextBlock, Image } from "sanity";

export interface PenInterface {
  title: string;
  description: string;
  slug: string;
  thumbnail: Image;
  content: Array<
    | {_key: string, codepenId: string}
    | {_key: string, _type: 'portableText', blocks: PortableTextBlock[]}
  >;
}