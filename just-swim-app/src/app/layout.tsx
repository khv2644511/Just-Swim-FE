import type { Metadata } from 'next';
import './globals.scss';
import '@/app/reset.scss';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Just Swim',
  description: 'VIP Swimming Feedback Service',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
