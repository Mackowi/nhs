import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

export default defineConfig({
  site: 'https://rafalnhs.netlify.app',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
})
