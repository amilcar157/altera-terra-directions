// @ts-check
import { defineConfig } from 'astro/config';

// GH_PAGES=1 builds for the GitHub Pages preview subpath; otherwise this builds
// for the eventual alteraterra.vip root deploy.
const ghPages = process.env.GH_PAGES === '1';

// https://astro.build/config
export default defineConfig({
  site: ghPages ? 'https://amilcar157.github.io' : 'https://alteraterra.vip',
  base: ghPages ? '/altera-terra-directions/' : undefined,
  output: 'static',
});
