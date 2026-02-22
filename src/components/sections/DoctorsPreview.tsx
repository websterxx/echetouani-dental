import Image from 'next/image';
import Link from 'next/link';
import { doctors } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function DoctorsPreview() {
  return (
    <section id="doctors" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Rencontrez Nos Dentistes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos dentistes expérimentés et compatissants s'engagent à vous fournir des soins de la plus haute qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <Link
              key={index}
              href="/doctor-office"
              className="group relative block rounded-lg overflow-hidden aspect-[4/5] transition-transform hover:scale-105 shadow-2xl"
            >
              <Image
                src={doctor.image}
                alt={`${doctor.firstName} ${doctor.lastName}`}
                fill
                className="object-cover w-full h-full"
                data-ai-hint={doctor.dataAiHint}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">
                  DR. {doctor.lastName.toUpperCase()}
                </h3>
                <p className="text-xl mb-4">{doctor.firstName}</p>

                <Button
                  variant="secondary"
                  className="font-semibold"
                >
                  En savoir plus
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}