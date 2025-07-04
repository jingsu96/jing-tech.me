import 'css/tailwind.css';
import 'css/sandpack.css';
import 'pliny/search/algolia.css';

import { Metadata } from 'next';
import { Inter, Noto_Sans_TC } from 'next/font/google';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import { SearchProvider, SearchConfig } from 'pliny/search';
import { draftMode } from 'next/headers';
import { EyeIcon } from 'lucide-react';

import SectionContainer from '@/components/SectionContainer';
import { MenuContent } from '@/components/lab/menu-content';
import { SideMenu } from '@/components/lab/side-menu';
import { TailwindIndicator } from '@/components/lab/tailwind-indicator';
import { SpeedInsights } from '@vercel/speed-insights/next';
import siteMetadata from '@/data/siteMetadata';
import MigrationBanner from '@/components/Banner';
import { ThemeProviders } from './theme-providers';

const space_grotesk = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-tc',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: ['./opengraph-image'],
    locale: 'zh_TW',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: ['./opengraph-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode();

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${noto_sans_tc.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1b1b1f" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body>
        <a id="skip" href="#skip-target">
          Skip to main content
        </a>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ThemeProviders>
          {/* Clean Migration Banner */}
          <MigrationBanner />
          <main vaul-drawer-wrapper="" className="min-h-screen bg-bg-primary">
            {isEnabled && (
              <div className="absolute inset-x-0 bottom-0 z-50 flex h-12 w-full items-center justify-center bg-green-500 text-center text-sm font-medium text-white">
                <div className="flex items-center gap-2">
                  <EyeIcon size={16} />
                  <span>Draft mode is enabled</span>
                </div>
              </div>
            )}
            <div className="lg:flex">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <SideMenu className="relative hidden h-[100vh] max-h-[100vh] lg:flex">
                  <MenuContent />
                </SideMenu>
                <SectionContainer>
                  <span id="skip-target"></span>
                  {children}
                </SectionContainer>
              </SearchProvider>
            </div>
          </main>
        </ThemeProviders>
        <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
        <TailwindIndicator />
        <SpeedInsights />
      </body>
    </html>
  );
}
