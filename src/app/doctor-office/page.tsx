
import Image from 'next/image';
import { doctors } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Nos Docteurs & Cabinet | Cabinet Dentaire Echetouani',
  description: 'Rencontrez nos dentistes experts, Dr. Marouane et Dr. Ahmed Echetouani, et visitez notre cabinet dentaire moderne et accueillant.',
};

const officeImages = [
  { src: '/cabinnet1.png', alt: 'Zone de réception', dataAiHint: 'dental reception' },
  { src: '/cabinnet2.png', alt: 'Salle de traitement moderne', dataAiHint: 'dental chair' },
  { src: '/cabinnet3.png', alt: 'Salle d\'attente confortable', dataAiHint: 'clinic waiting room' },
  { src: '/cabinnet4.png', alt: 'Équipement dentaire de pointe', dataAiHint: 'dental equipment' },
];

export default function DoctorOfficePage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Nos Docteurs & Cabinet</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe de professionnels dévoués dans une installation de pointe, engagée pour votre confort et vos soins.
          </p>
        </div>
      </header>

      <section id="doctors" className="py-16 sm:py-24">
        <div className="container space-y-16">
          {doctors.map((doctor, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className={`md:col-span-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Avatar className="w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-primary shadow-lg">
                  <AvatarImage src={""} alt={`Dr. ${doctor.firstName} ${doctor.lastName}`} data-ai-hint={doctor.dataAiHint} />
                  <AvatarFallback>{doctor.firstName.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4">Dr. {doctor.firstName} {doctor.lastName}</h2>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="philosophy" className="py-16 sm:py-24 bg-secondary">
        <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Notre Philosophie</h2>
            <p className="text-lg text-muted-foreground">
              Notre pratique est fondée sur la confiance, l'intégrité et un engagement envers l'excellence. Nous croyons en la création d'une atmosphère chaleureuse et accueillante où les patients se sentent comme en famille. En combinant une technologie de pointe avec une touche personnelle, nous nous efforçons d'offrir des résultats exceptionnels et une expérience confortable pour tous ceux qui franchissent nos portes.
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
              <Card key={index} className="overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover aspect-video"
                  data-ai-hint={image.dataAiHint}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
