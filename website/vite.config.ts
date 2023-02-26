import solid from "solid-start/vite";
import { defineConfig, UserConfig, UserConfigFn } from "vite";
import { groq, sanityClient } from "./src/sanity/client";

import dns from 'dns'
dns.setDefaultResultOrder('verbatim');

const getPens = async (): Promise<string[]> => {
  if (!globalThis.fetch) {
    const {Headers, Request, Response, default: fetch} = await import('node-fetch');
    Object.assign(globalThis, {fetch, Headers, Request, Response});
  }
  const slugs = await sanityClient.fetch<string[]>(groq`*[_type == "pen"].slug.current`);
  return slugs.map(slug => `/pens/${slug}`);
};

const userConfig: UserConfigFn = async (env): Promise<UserConfig> => {
  const pens: string[] = env.ssrBuild ? await getPens() : [];
  return {
    plugins: [solid({
      solid: { hydratable: true },
      babel: (_source: string, id: string) => ({
        plugins: [["solid-styled/babel", { source: id }]],
      }),
      prerenderRoutes: [
        '/articles/',
        '/articles/test',
        '/pens/',
        ...pens,
      ],
      adapter: 'solid-start-static',
    })],
  }
}

export default defineConfig(userConfig);
