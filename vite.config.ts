import solid from "solid-start/vite";
import { defineConfig } from "vite";
import { groq, sanityClient } from "./src/sanity/client";
import fetch, {
  Headers,
  Request,
  Response,
} from 'node-fetch'
import asyncStatic from './async-static';

if (!globalThis.fetch) {
  Object.assign(globalThis, {fetch, Headers, Request, Response});
}

const getPens = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch<string[]>(groq`*[_type == "pen"].slug.current`);
  return slugs.map(slug => `/pens/${slug}`);
};

export default defineConfig({
  plugins: [solid({
    solid: { hydratable: true },
    babel: (_, id) => ({
      plugins: [["solid-styled/babel", { source: id }]],
    }),
    prerenderRoutes: new Promise(async (resolve) => {
      resolve([
        '/articles/',
        '/articles/test',
        '/pens/',
        ...await getPens(),
      ]);
    }),
    adapter: asyncStatic(),
  })],
});
