import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils/cn';
import { Header } from '@/components/layout/Header';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { AsyncFontLink } from '@/components/layout/AsyncFontLink';

export const metadata: Metadata = {
  title: 'Cabinet Dentaire Echetouani',
  description:
    'Soins dentaires professionnels par Marouane & Ahmed Echetouani. Un sourire sain commence ici.',
  keywords: [
    'dentiste',
    'soins dentaires',
    'Marouane Echetouani',
    'Ahmed Echetouani',
    'sourires sains',
    'blanchiment',
    'orthodontie',
    'implants dentaires',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <AsyncFontLink />
      </head>

      <body
        className={cn(
          'font-body antialiased min-h-screen flex flex-col bg-background'
        )}
      >
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}