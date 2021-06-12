import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllIds, getContentData } from '../../lib/docs';
import Layout from '../../components/Layout';

type MarkdownData = {
  docData: {
    slug: string;
    lang: string;
    toc: boolean;
    thumbnail: string;
    title: string;
    contentHtml: string;
  };
};

export default function DocPage({ docData }: MarkdownData) {
  const { title, toc, contentHtml } = docData;

  return (
    <Layout className="docs" toc={toc}>
      <h1>{title}</h1>
      <div
        className="post-text"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const docData = await getContentData(`/${params.lang}/${params.slug}`);

  return {
    props: {
      locale: params?.lang || 'pt',
      docData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds();

  return {
    paths,
    fallback: false,
  };
};
