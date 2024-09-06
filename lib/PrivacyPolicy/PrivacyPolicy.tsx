import privacy from "./privacy.md";
import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';

/**
 * https://stackoverflow.com/questions/37121520/it-is-semantically-correct-to-use-header-inside-section
 * might not be ok to include header within article?
 */
const CustomH1 = ({ children }: { children: React.ReactNode }) => {
  return <header><h1 className="text-4xl font-bold mb-6 block">{children}</h1></header>;
};

const CustomH2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl font-semibold mb-4 block">{children}</h2>;
};

const CustomH3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl font-medium mb-3 block">{children}</h3>;
};

const CustomH4 = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-lg font-normal mb-2 block">{children}</h4>;
};

const CustomP = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-4 block">{children}</p>;
};

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
      {children}
    </a>
  );
};

const CustomLI = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="ml-4 mb-4 list-disc">
      <span>{children}</span>
    </li>
  );
};

const options = {
  overrides: {
    h1: {
      component: CustomH1,
    },
    h2: {
      component: CustomH2,
    },
    h3: {
      component: CustomH3,
    },
    h4: {
      component: CustomH4,
    },
    p: {
      component: CustomP,
    },
    a: {
      component: CustomLink,
    },
    li: {
      component: CustomLI,
    },
  },
};

export function PrivacyPolicy(props: any) {
  return <ReactMarkdown options={options} {...props}>{privacy}</ReactMarkdown>;
}
