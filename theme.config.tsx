import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Head from 'next/head';

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
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      'https://morkie.xyz' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return {
      titleTemplate: '%s | Morkie Documentation',
      meta: [
        { property: 'og:url', content: url },
        { property: 'og:title', content: frontMatter.title || 'Morkie Documentation' },
        { property: 'og:description', content: frontMatter.description || 'A brief overview of our project and what we aim to achieve' }
      ]
    };
  },
};

export default config;
