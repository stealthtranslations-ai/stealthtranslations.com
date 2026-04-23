import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  jsonLd?: Record<string, any>;
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  noIndex = false,
  jsonLd
}: SEOProps): Metadata {
  const baseUrl = 'https://stealthtranslations.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const metadata: Metadata = {
    title: {
      default: title,
      template: '%s | Stealth Translations'
    },
    description,
    keywords: keywords || 'AI data collection, multilingual AI training, data annotation, AI data engineering, translation services, machine learning data, multilingual datasets',
    authors: [{ name: 'Stealth Translations' }],
    creator: 'Stealth Translations',
    publisher: 'Stealth Translations',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: fullCanonical,
      title,
      description,
      siteName: 'Stealth Translations',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@stealthtrans',
      site: '@stealthtrans',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };

  // Add JSON-LD structured data if provided
  if (jsonLd) {
    return {
      ...metadata,
      other: {
        'application/ld+json': JSON.stringify(jsonLd),
      },
    };
  }

  return metadata;
}

// Common JSON-LD schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stealth Translations',
  url: 'https://stealthtranslations.com',
  logo: 'https://stealthtranslations.com/images/logo.png',
  description: 'Leading provider of AI data collection, multilingual AI training data, and professional translation services with 20+ years of experience.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belfast',
    addressRegion: 'Northern Ireland',
    addressCountry: 'GB',
    postalCode: 'BT1',
    streetAddress: 'Global Headquarters',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 28 28 267 103',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/stealth-translations-ltd/',
  ],
  areaServed: 'Worldwide',
  knowsAbout: [
    'AI Data Collection',
    'Multilingual AI Training',
    'Data Annotation',
    'AI Data Engineering',
    'Translation Services',
    'Machine Learning Data',
    'Multilingual Datasets',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stealth Translations',
  description: 'Professional AI data collection and translation services',
  url: 'https://stealthtranslations.com',
  telephone: '+44 28 28 267 103',
  email: 'sales@stealthtranslations.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belfast',
    addressRegion: 'Northern Ireland',
    addressCountry: 'GB',
    postalCode: 'BT1',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.5964,
    longitude: -5.9301,
  },
  openingHours: 'Mo-Fr 09:00-17:00',
  priceRange: '$$',
};

export const serviceSchema = (serviceName: string, serviceDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'Organization',
    name: 'Stealth Translations',
    url: 'https://stealthtranslations.com',
  },
  areaServed: 'Worldwide',
  availableLanguage: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'],
});

export const articleSchema = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: `https://stealthtranslations.com${url}`,
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'Stealth Translations',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Stealth Translations',
    logo: {
      '@type': 'ImageObject',
      url: 'https://stealthtranslations.com/images/logo.png',
    },
  },
});
