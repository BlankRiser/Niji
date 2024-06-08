import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components | Niji',
  description:
    'Find a set of various components for React which uses Tailwind CSS to style them.',
};

export default function ComponentPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
