import './globals.css';

// eslint-disable-next-line import/no-extraneous-dependencies -- alias purpose
import { Container, Footer, Head, Header, ThemeProvider } from '@duck/components';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['100', '200', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Duck Resume',
  description: '',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className={inter.className} lang="en" style={{ width: '100%', margin: 0, padding: 0 }}>
      <Head />

      <body className="bg-white text-gray-700 antialiased dark:bg-slate-900 dark:text-slate-50">
        <ThemeProvider>
          <Header longText={metadata.title} shortText="CV" />
          <main>
            <Container className="mb-20 min-h-screen">{children}</Container>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
