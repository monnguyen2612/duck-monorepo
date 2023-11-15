import React from 'react';
import './globals.css';

import { Container, Footer, Head, Header } from '@duck/components';

export const metadata = {
  title: 'Duck Resume',
  description: '',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" style={{ width: '100%', margin: 0, padding: 0 }}>
      <Head />

      <body className="bg-white text-gray-700 antialiased dark:bg-slate-900 dark:text-slate-50">
        <Header longText={metadata.title} shortText="CV" />
        <main>
          <Container className="mb-20 min-h-screen">{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
