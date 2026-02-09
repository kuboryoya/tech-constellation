// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Tech Constellation',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/kuboryoya/tech-constellation' }
      ],
      sidebar: [
        {
          label: 'Next.js 2026',
          items: [
            // src/content/docs/nextjs/start.md に対応
            { label: '最短学習ロードマップ', slug: 'nextjs/start' },
          ],
        },
      ],
    }),
  ],
});
