// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), icon()],
});
