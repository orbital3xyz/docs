import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Orbital3</span>,
  project: {
    link: 'https://github.com/orbital3xyz/docs',
  },
  chat: {
    link: 'https://discord.gg/sJb6gvzcgA',
  },
  docsRepositoryBase: 'https://github.com/orbital3xyz/docs',
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://orbital3.xyz" target="_blank">Orbital3</a>.
    </span>,
  },
  i18n: [
    { locale: 'en', text: 'English' }, 
    { locale: 'zh', text: '简体中文' },
  ],
}

export default config
