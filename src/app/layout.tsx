import type { Metadata } from 'next';

import './globals.css';
import { Header } from '@/components/Header/Header';
import { ReactNode } from 'react';
import { Montserrat, DM_Serif_Display, Poppins, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'uniXeven',
  description: 'Generated by create uniXeven app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} ${dmSerifDisplay.className} ${poppins.className} `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
