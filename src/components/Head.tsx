import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
// import { useIntl } from 'gatsby-plugin-intl';

interface HeadProps {
  title: string;
  description?: string;
  thumbnail?: string;
}

const Head: React.FC<HeadProps> = ({ title, description, thumbnail }) => {
  // const intl = useIntl();
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          social {
            twitter
            fbid
          }
        }
      }
    }
  `);
  const site = data.site.siteMetadata;
  const meta = description || site.description;
  const { fbid } = site.social;
  const thumb = thumbnail || '';

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} - ${site.title}`}
      meta={[
        {
          name: 'description',
          content: meta,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: meta,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: thumb,
        },
        {
          property: 'og:image:width',
          content: 'thumb',
        },
        {
          property: 'og:image:height',
          content: '434',
        },
        {
          property: 'fb:app_id',
          content: fbid,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: meta,
        },
        {
          property: 'twitter:image',
          content: thumb,
        },
        {
          property: 'theme-color',
          content: '#000000',
        },
      ]}
    />
  );
};

export default Head;
