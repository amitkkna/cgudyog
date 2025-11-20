import { Metadata } from 'next';

export const siteMetadata = {
    title: 'Chhattisgarh Udyog Mahasangh',
    description: 'Premier business directory and networking platform for industries, suppliers, and entrepreneurs across Chhattisgarh. Connect with 500+ member companies across 15+ industry sectors.',
    url: 'https://cgudyogmahasangh.com',
    siteName: 'CG Udyog Mahasangh',
    locale: 'en_IN',
    type: 'website',
};

export const defaultMetadata: Metadata = {
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.siteName}`,
    },
    description: siteMetadata.description,
    keywords: [
        'Chhattisgarh business',
        'business directory',
        'Raipur industries',
        'manufacturing companies',
        'trading services',
        'business network',
        'CG industries',
        'business opportunities',
        'entrepreneurs',
        'suppliers directory',
    ],
    authors: [{ name: 'Chhattisgarh Udyog Mahasangh' }],
    creator: 'Chhattisgarh Udyog Mahasangh',
    publisher: 'Chhattisgarh Udyog Mahasangh',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteMetadata.url),
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.url,
        siteName: siteMetadata.siteName,
        locale: siteMetadata.locale,
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: siteMetadata.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};
