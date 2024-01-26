import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portal',
  description: 'Welcome to MyPortal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <h1 className='text-center mt-10'>Welcome to My Portal</h1>
        <main className='flex min-h-screen flex-col items-center p-12'>
          <nav className='text-amber-600 w-full text-center mb-10'>
            <Link href='/info'>Info</Link>&nbsp;|&nbsp;
            <Link href='/bookmark'>Bookmark</Link>&nbsp;|&nbsp;
            <Link href='/search'>Search</Link>&nbsp;|&nbsp;
            <Link href='/todo'>Todo</Link>&nbsp;|&nbsp;
            <Link href='/clock'>Clock</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
