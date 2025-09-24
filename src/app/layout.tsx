import type { Metadata } from 'next';
import { Inter_Tight, Playfair_Display } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'RetroMemeCoin — nostalgic memecoin, simple buy steps',
  description: 'RetroMemeCoin blends arcade-era nostalgia with modern crypto. Clear buy steps, transparent tokenomics, and a friendly community vibe.',
  keywords: ['memecoin', 'retro', 'nostalgia', 'buy-steps', 'tokenomics', 'community', 'arcade', 'crypto', 'blockchain', 'brand'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'RetroMemeCoin — nostalgic memecoin, simple buy steps',
    description: 'RetroMemeCoin blends arcade-era nostalgia with modern crypto. Clear buy steps, transparent tokenomics, and a friendly community vibe.',
    type: 'website',
    url: 'http://localhost:3000',
    siteName: 'RetroMemeCoin',
    images: [{
      url: '/images/logo.svg',
      width: 1200,
      height: 630,
      alt: 'RetroMemeCoin — nostalgic memecoin, simple buy steps'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RetroMemeCoin — nostalgic memecoin, simple buy steps',
    description: 'RetroMemeCoin blends arcade-era nostalgia with modern crypto. Clear buy steps, transparent tokenomics, and a friendly community vibe.',
    images: ['/images/logo.svg']
  },
  robots: { index: true, follow: true },
  icons: [{ url: '/favicon.ico' }]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}