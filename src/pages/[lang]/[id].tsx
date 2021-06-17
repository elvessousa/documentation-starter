import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllIds, getContentData } from '../../lib/docs';
import Layout from '../../components/Layout';

type MarkdownData = {
  pageData: {
    slug: string;
    lang: string;
    aside: boolean;
    thumbnail: string;
    title: string;
    contentHtml: string;
  };
};

export default function Page({ pageData }: MarkdownData) {
  const { title, aside, contentHtml } = pageData;
  const pageClass = aside ? 'page' : 'full-page';

  return (
    <Layout className={pageClass} hideAside={!aside}>
      <h1>{title}</h1>
      <div
        className="post-text"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContentData(`/${params.lang}/${params.id}`, 'page');

  return {
    props: {
      locale: params?.lang || 'en',
      pageData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds('page');

  return {
    paths,
    fallback: false,
  };
};
