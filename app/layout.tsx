import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Links } from '@/components/Links';

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
        <h1 className='text-center mt-10 font-bold text-xl'>
          Welcome to My Portal
        </h1>
        <main className='flex min-h-screen flex-col items-center p-12'>
          <Links />
          {children}
        </main>
      </body>
    </html>
  );
}
