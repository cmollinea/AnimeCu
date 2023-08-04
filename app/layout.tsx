import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import NavBar from './components/NavBar';

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900']
// });

export const metadata: Metadata = {
  title: 'AnimeCU | Home',
  description: 'Anime information just one click away'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='luxury' lang='en'>
      <body className={`text-gray-300 overflow-x-hidden`}>
        <NavBar />
        <main className='min-h-screen relative'>{children}</main>
      </body>
    </html>
  );
}
