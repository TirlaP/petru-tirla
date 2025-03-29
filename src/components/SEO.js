import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ title, description, image, article }) => {
  const router = useRouter();
  const baseUrl = 'https://tirlap.github.io';
  const url = `${baseUrl}${router.asPath}`;
  
  const siteTitle = 'Petru Tîrlă | Web Developer';
  const siteDescription = 'Portfolio website of Petru Tîrlă, a professional web developer specializing in modern web applications.';
  
  const finalTitle = title 
    ? `${title} | Petru Tîrlă` 
    : siteTitle;
  
  const finalDescription = description || siteDescription;
  const finalImage = image || `${baseUrl}/images/og-image.jpg`;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Petru Tîrlă" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Petru Tîrlă" />
      <meta name="keywords" content="web developer, frontend, react, next.js, javascript, portfolio" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;