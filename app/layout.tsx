import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
