import solid from "solid-start/vite";
import { defineConfig, UserConfig, UserConfigFn } from "vite";
import solidStyled from 'vite-plugin-solid-styled';
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
  const pens: string[] = env.mode === 'production' ? await getPens() : [];
  return {
    plugins: [
      solid({
        solid: { hydratable: true },
        prerenderRoutes: [
          '/articles/',
          '/articles/test',
          '/pens/',
          ...pens,
        ],
        adapter: 'solid-start-static',
      }),
      solidStyled({
        filter: {
          include: 'src/**/*.tsx',
          exclude: 'node_modules/**/*.{ts,js}',
        }
      })
    ],
  }
}

export default defineConfig(userConfig);
