import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

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
      <body
        className={`text-gray-300 overflow-x-hidden ${roboto_condensed.className}`}
      >
        <NavBar /> <main className='min-h-screen relative'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
