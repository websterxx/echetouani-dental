import Image from 'next/image';
import { doctors } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import Script from 'next/script';

export const metadata = {
  title: 'Nos Dentistes à Romilly-sur-Seine | Cabinet Dentaire Echetouani Charron',

  description:
    'Découvrez les Dr Marouane Echetouani, Dr Ahmed Echetouani et Dr Mélanie Charron, chirurgiens-dentistes à Romilly-sur-Seine. Cabinet moderne, soins dentaires complets et prise de rendez-vous sur Doctolib.',
};

const officeImages = [
  { src: '/Cabinet1.png', alt: 'Salle de traitement moderne' },
  { src: '/Cabinet2.png', alt: 'Salle de traitement moderne' },
  { src: '/Cabinet3.png', alt: 'Salle de traitement moderne' },
  { src: '/Cabinet4.png', alt: 'Salle de traitement moderne' },
  { src: '/Cabinet5.png', alt: 'Salle de radiologie' },
  { src: '/Cabinet6.png', alt: 'Salle de préparation' },
];

const officeSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalClinic'],

  '@id': 'https://cabinetdentaireromilly.com/#clinic',

  name: 'Cabinet Dentaire Echetouani Charron',
  url: 'https://cabinetdentaireromilly.com',
  image: 'https://cabinetdentaireromilly.com/og-image.jpg',

  telephone: '03 68 89 06 70',
  email: 'cabinetdentaireromilly@gmail.com',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '49 Bis Rue Carnot',
    postalCode: '10100',
    addressLocality: 'Romilly-sur-Seine',
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

  medicalSpecialty: 'Dentistry',

  priceRange: '€€',

  areaServed: [
    {
      '@type': 'City',
      name: 'Romilly-sur-Seine',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Aube',
    },
  ],

  sameAs: ['https://cabinetdentaireromilly.com'],

  employee: [
    {
      '@type': 'Physician',
      name: 'Dr. Marouane Echetouani',
      jobTitle: 'Chirurgien-dentiste',
      sameAs: 'https://www.doctolib.fr/dentiste/chateau-thierry/marouane-echetouani',
      worksFor: {
        '@id': 'https://cabinetdentaireromilly.com/#clinic',
      },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Ahmed Echetouani',
      jobTitle: 'Chirurgien-dentiste',
      sameAs: 'https://www.doctolib.fr/dentiste/chateau-thierry/ahmed-echetouani',
      worksFor: {
        '@id': 'https://cabinetdentaireromilly.com/#clinic',
      },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Mélanie Charron',
      jobTitle: 'Chirurgien-dentiste',
      sameAs: 'https://www.doctolib.fr/dentiste/vincennes/melanie-charron',
      worksFor: {
        '@id': 'https://cabinetdentaireromilly.com/#clinic',
      },
    },
  ],
};

export default function DoctorOfficePage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-nickainley">Nos Docteurs & Cabinet</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe de professionnels dévoués dans une installation de pointe, engagée pour votre
            confort et vos soins.
          </p>
        </div>
      </header>

      <section id="doctors" className="py-16 sm:py-24">
        <div className="container space-y-16">
          {doctors.map((doctor, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className={`md:col-span-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Avatar className="w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-primary shadow-lg">
                  <AvatarImage
                    src={doctor.image}
                    alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                    className="object-cover"
                  />
                  <AvatarFallback>{doctor.firstName.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">{doctor.bio1}</p>
                <p className="text-muted-foreground leading-relaxed mb-2">{doctor.bio2}</p>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio3}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="philosophy" className="py-16 sm:py-24 bg-secondary">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Notre Philosophie</h2>
          <p className="text-lg text-muted-foreground">
            Notre pratique est fondée sur la confiance, l'intégrité et un engagement envers
            l'excellence. Nous croyons en la création d'une atmosphère chaleureuse et accueillante
            où les patients se sentent comme en famille. En combinant une technologie de pointe avec
            une touche personnelle, nous nous efforçons d'offrir des résultats exceptionnels et une
            expérience confortable pour tous ceux qui franchissent nos portes.
          </p>
        </div>
      </section>

      <section id="office" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Visitez notre cabinet</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Entrez dans notre cabinet dentaire moderne, propre et confortable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
            {officeImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover aspect-video"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Script
        id="office-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(officeSchema),
        }}
      />
    </div>
  );
}
