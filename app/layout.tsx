import type { Metadata } from 'next';
import { Hanken_Grotesk, IBM_Plex_Mono, Reenie_Beanie } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

const beanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-hand',
});

export const metadata: Metadata = {
  title: 'elsewhere/now — field notes on moving',
  description:
    'Honest notes on moving abroad — what it was really like, what helped, and how to start living now.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${plexMono.variable} ${beanie.variable}`}>
        {children}
      </body>
    </html>
  );
}
