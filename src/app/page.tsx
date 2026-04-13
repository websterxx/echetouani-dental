import Script from 'next/script';

import { Hero } from '@/components/sections/Hero';
import { DoctorsPreview } from '@/components/sections/DoctorsPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { OurValues } from '@/components/sections/OurValues';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactMap } from '@/components/sections/ContactMap';

import { services, doctors } from '@/lib/data';

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',

  name: 'Cabinet Dentaire Echetouani Charron - Romilly-sur-Seine',
  url: 'https://cabinetdentaireromilly.com',

  description:
    'Cabinet dentaire à Romilly-sur-Seine proposant implants, esthétique dentaire, soins généraux et urgences dentaires.',

  publisher: {
    '@type': 'Dentist',
    '@id': 'https://cabinetdentaireromilly.com/#clinic',
    name: 'Cabinet Dentaire Echetouani Charron',
    url: 'https://cabinetdentaireromilly.com',

    telephone: '03 68 89 06 70',
    email: 'cabinetdentaireromilly@gmail.com',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '49 Bis Rue Carnot',
      postalCode: '10100',
      addressLocality: 'Romilly-sur-Seine',
      addressCountry: 'FR',
    },

    medicalSpecialty: 'Dentistry',

    employee: doctors.map((doctor) => ({
      '@type': 'Physician',
      name: `Dr. ${doctor.firstName} ${doctor.lastName}`,
    })),
  },

  mainEntity: {
    '@type': 'ItemList',

    name: 'Services dentaires',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.description,
      url: 'https://cabinetdentaireromilly.com/services',
    })),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorsPreview />
      <ServicesPreview />
      <OurValues />
      <Testimonials />
      <ContactMap />

      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />
    </>
  );
}
