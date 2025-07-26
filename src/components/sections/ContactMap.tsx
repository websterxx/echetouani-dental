import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Info, FileText } from 'lucide-react';
import { AppointmentButton } from '../layout/AppointmentButton';

export function ContactMap() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contactez-nous</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes idéalement situés et prêts à vous accueillir. Contactez-nous pour prendre votre rendez-vous dès aujourd'hui.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-lg overflow-hidden h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625997239!2d3.398935815674394!3d49.0454689793068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e85f5e5d3d4e6b%3A0x8e8b6b2d3e4c4d1!2s13%20Rue%20Jean%20de%20la%20Fontaine%2C%2002400%20Ch%C3%A2teau-Thierry%2C%20France!5e0!3m2!1sen!2sus!4v1622556677889!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte du Cabinet Dentaire Echetouani sur Google Maps"
            ></iframe>
          </div>
          <div className="lg:col-span-1">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-muted-foreground">13 Rue Jean de la Fontaine, 02400 Château-Thierry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                      <p className="text-muted-foreground">+33 9 87 65 43 21</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">contact@echetouani-dental.com</p>
                      <p className="text-muted-foreground">secretariat@echetouani-dental.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Horaires d'Ouverture</h4>
                      <p className="text-muted-foreground">Lun - Ven : 9h - 18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Info className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Paiement et Prise en Charge</h4>
                      <p className="text-muted-foreground text-sm">Prise en charge par la Sécurité Sociale et mutuelles.</p>
                      <p className="text-muted-foreground text-sm">Tiers payant, CMU, ACS acceptés.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Documents</h4>
                      <p className="text-muted-foreground text-sm">Pensez à votre Carte Vitale, attestation de mutuelle, et ordonnances.</p>
                    </div>
                  </div>
                </div>
                <AppointmentButton className="w-full font-semibold hover:scale-105" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}