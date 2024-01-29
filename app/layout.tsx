import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <h1 className='text-center mt-10 font-extralight'>
          Welcome to My Portal
        </h1>
        <main className='flex min-h-screen flex-col items-center p-12'>
          <nav className='font-extrabold w-full text-center mb-10'>
            <Link href='/info'>Info</Link>&nbsp;|&nbsp;
            <Link href='/bookmark'>Bookmark</Link>&nbsp;|&nbsp;
            <Link href='/search'>Search</Link>&nbsp;|&nbsp;
            <Link href='/todo'>Todo</Link>&nbsp;|&nbsp;
            <Link href='/clock'>Clock</Link>&nbsp;|&nbsp;
            <Link href='/dailyRoutine'>Daily Routine</Link>&nbsp;|&nbsp;
            <Link href='/draw'>Draw</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
