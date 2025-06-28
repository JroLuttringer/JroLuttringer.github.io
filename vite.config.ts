// vite.config.ts
import { defineConfig } from "vite";
import solid from "solid-start/vite";
import rawPlugin from "vite-plugin-raw";

export default defineConfig({
  plugins: [
    solid(),
    rawPlugin({
      fileRegex: /\.ya?ml$/
    })
  ]
});