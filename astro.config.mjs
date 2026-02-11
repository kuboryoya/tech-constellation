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
            { label: 'TypeScript学習ロードマップ', slug: 'typescript/start-to-nextjs' },
            { label: 'Next.js学習ロードマップ', slug: 'nextjs/start' },
          ],
        },
      ],
      components: {
        Head: './src/components/CustomHead.astro',
      },
    }),
  ],
});
