import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
        <main>{children}</main>
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className='mx-auto mt-2 flex max-w-7xl items-center justify-between rounded-md bg-neutral-100 px-3 py-2'>
      <p className='font-bold tracking-wider'>
        <span className='text-violet-500'>N</span>
        <span className='text-blue-500'>i</span>
        <span className='text-green-500'>j</span>
        <span className='text-orange-500'>i</span>
      </p>
      <ul className=''>
        <li>buttons</li>
      </ul>
    </nav>
  );
};
