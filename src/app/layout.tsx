import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils/cn';
import { Header } from '@/components/layout/Header';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { AsyncFontLink } from '@/components/layout/AsyncFontLink';

export const metadata: Metadata = {
  metadataBase: new URL('https://cabinetdentaireromilly.com'),

  title: 'Cabinet Dentaire Echetouani Charron',
  description:
    'Soins dentaires professionnels à Romilly-sur-Seine : implants, orthodontie, urgences dentaires. Cabinet des Dr Echetouani et Charron.',

  keywords: [
    'dentiste Romilly-sur-Seine',
    'cabinet dentaire Aube',
    'implant dentaire',
    'urgence dentaire',
    'orthodontie',
  ],

  openGraph: {
    title: 'Cabinet Dentaire à Romilly-sur-Seine | Echetouani Charron',
    description:
      'Cabinet dentaire à Romilly-sur-Seine : soins dentaires, implants, orthodontie et urgences.',
    url: 'https://cabinetdentaireromilly.com',
    siteName: 'Cabinet Dentaire Echetouani Charron',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logSansBackGround.png',
        width: 1200,
        height: 630,
        alt: 'Cabinet Dentaire Romilly-sur-Seine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Dentaire à Romilly-sur-Seine',
    description: 'Soins dentaires, implants et urgences à Romilly-sur-Seine.',
    images: ['/logSansBackGround.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logSansBackGround.png',
  },
};

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness'],
  name: 'Cabinet Dentaire Echetouani Charron',
  image: 'https://cabinetdentaireromilly.com/og-image.jpg',
  url: 'https://cabinetdentaireromilly.com',
  telephone: '03 68 89 06 70',
  email: 'cabinetdentaireromilly@gmail.com',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '49 Bis Rue Carnot',
    postalCode: '10100',
    addressLocality: 'Romilly-sur-Seine',
    addressRegion: 'Aube',
    addressCountry: 'FR',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.515,
    longitude: 3.727,
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],

  sameAs: ['https://cabinetdentaireromilly.com'],

  medicalSpecialty: 'Dentistry',
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentistSchema),
          }}
        />
      </head>

      <body className={cn('font-body antialiased min-h-screen flex flex-col bg-background')}>
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
