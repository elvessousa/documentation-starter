import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Navigation from './Navigation';
import TableOfContents from './TableOfContents';

type LayoutProps = {
  className: string;
  hideAside?: boolean;
  headings?: any;
  toc?: boolean;
  children: ReactNode;
};

export default function Layout({
  className,
  hideAside,
  toc,
  headings,
  children,
}: LayoutProps) {
  const layoutClass = toc ? `${className} has-toc` : className;

  return (
    <>
      <Head>
        <title>Documentation Starter</title>
      </Head>
      <main className={layoutClass}>
        <header className="header">
          <Link href="/">
            <a className="brand">Documentation Starter</a>
          </Link>
          <Navigation />
        </header>
        {!hideAside && <Sidebar />}
        <article className="content">{children}</article>
        {toc && <TableOfContents headings={headings} />}
      </main>
      <Footer>Docs &copy; {new Date().getFullYear()}</Footer>
    </>
  );
}
