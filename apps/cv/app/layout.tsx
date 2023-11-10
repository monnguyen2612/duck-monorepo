import './globals.css';

export const metadata = {
  title: 'Duyet Resume',
  description: '',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" style={{ width: '100%', margin: 0, padding: 0 }}>

      <body className="bg-white text-gray-700 antialiased dark:bg-slate-900 dark:text-slate-50">
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
