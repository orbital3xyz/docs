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
  docsRepositoryBase: 'https://github.com/orbital3xyz/docs/blob/main',
  footer: {
    text: <span>
      Copyright © {new Date().getFullYear()} Orbital3 Labs. All rights reserved.
    </span>,
  },
  i18n: [
    { locale: 'en', text: 'English' }, 
    { locale: 'zh', text: '简体中文' },
  ],
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ textAlign: 'left' }}>{title}</div>
        )
      }
      return <>{title}</>
    }
  }
}

export default config
