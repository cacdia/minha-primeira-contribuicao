import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minha Primeira Contribuição",
  description: "Introdução ao Git e Github",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Intruções', link: '/terminal' }
    ],

    sidebar: [
      {
        text: 'Instruções',
        items: [
          { text: 'Terminal', link: '/terminal' },
          { text: 'VSCode', link: '/vscode' },
          { text: 'Contribuidores', link: '/contrib' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cacdia/minha-primeira-contribuicao' }
    ]
  }
})
