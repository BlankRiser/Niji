import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Niji',
  description:
    'Niji provides a set of various components for React which uses Tailwind CSS to style them.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <main className='mx-auto max-w-5xl px-3 py-2'>{children}</main>
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className='mx-auto mt-2 flex max-w-5xl items-center justify-between rounded-md bg-neutral-100 px-3 py-2'>
      <Link href='/' className='font-bold tracking-wider'>
        <span className='text-violet-500'>N</span>
        <span className='text-blue-500'>i</span>
        <span className='text-green-500'>j</span>
        <span className='text-orange-500'>i</span>
      </Link>
      <ul className=''>
        <li>
          <Link
            className='text-blue-500 hover:text-blue-400 active:underline active:underline-offset-4'
            href='/components'
          >
            Components
          </Link>
        </li>
      </ul>
    </nav>
  );
};
