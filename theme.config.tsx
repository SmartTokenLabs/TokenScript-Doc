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
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Smart Layer Launchpad',
    };
  },

  head: function useHead() {
    const socialCard =
      'https://launchpad.smartlayer.network/opengraph-image.png';

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A token centric architecture for a token centric web"
        />
        <meta
          name="og:description"
          content="A token centric architecture for a token centric web"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta
          name="twitter:site:domain"
          content="launchpad.smartlayer.network"
        />
        <meta
          name="twitter:url"
          content="https://launchpad.smartlayer.network/opengraph-image.png"
        />
        <meta name="og:title" content={'Launchpad Docs'} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Launchpad Docs" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        /> */}
      </>
    );
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    autoCollapse: false,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} SmartToken Labs.
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
