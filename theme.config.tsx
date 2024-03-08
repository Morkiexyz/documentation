import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig & { useNextSeoProps?: () => object } = {
  logo: <span>Morkie</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Morkie Documentation" />
      <meta property="og:description" content="A brief overview of our project and what we aim to achieve" />
      <link rel="icon" href="/images/favicon.ico" />
    </>
  ),
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
