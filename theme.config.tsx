import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig & { useNextSeoProps?: () => object } = {
  logo: <span>Morkie</span>,
  project: {
    link: 'https://github.com/mazzwell/Morkie',
  },
  chat: {
    link: 'https://discord.com/invite/4kJgQ4AuJN',
  },
  docsRepositoryBase: 'https://github.com/mazzwell/documentation',
  footer: {
    text: 'Morkie Docs',
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s | Morkie Documentation',
    };
  },
};

export default config;
