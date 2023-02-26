import { groq, sanityClient } from '../client';
import { type Testdoc } from '../generated/schema-types';

const pageQuery = groq`*[_type == 'testdoc'][0]{title}`;

export const getPageData = async () => await sanityClient.fetch<Testdoc>(pageQuery);