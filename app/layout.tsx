import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        <NavBar /> <main className='min-h-screen relative'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
