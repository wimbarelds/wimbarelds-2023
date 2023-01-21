import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({
    solid: { hydratable: true },
    adapter: 'solid-start-static'
  })],
});
