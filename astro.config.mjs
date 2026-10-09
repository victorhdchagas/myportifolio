// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://victorhugo.info',
  integrations: [db(), icon()],
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
