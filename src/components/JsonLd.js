import Head from 'next/head';

// Person schema for your personal information
export const PersonJsonLd = ({ name, jobTitle, image, sameAs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    image,
    sameAs,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

// WebSite schema for your portfolio site
export const WebsiteJsonLd = ({ name, description, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

// Article schema for blog posts
export const ArticleJsonLd = ({ 
  title, 
  description, 
  url, 
  images, 
  authorName, 
  publisherName, 
  publisherLogo,
  datePublished, 
  dateModified 
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: images,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

// BreadcrumbList schema for breadcrumb navigation
export const BreadcrumbJsonLd = ({ items }) => {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href,
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};