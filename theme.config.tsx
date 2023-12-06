import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/smarttokenlabs/tokenscript-doc',
  },
  chat: {
    link: 'https://discord.gg/smartlayer',
  },
  docsRepositoryBase:
    'https://github.com/smarttokenlabs/tokenscript-doc/tree/main',
  footer: {
    text: 'Smart Token Store',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Smart Token Store',
    };
  },
};

export default config;
