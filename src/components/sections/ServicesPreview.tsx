import Link from 'next/link';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServicesPreview() {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nos Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une large gamme de services dentaires pour répondre à tous vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group relative flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1">
              <div className="mb-4 p-4 bg-primary/10 rounded-full">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              Voir tous les services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}