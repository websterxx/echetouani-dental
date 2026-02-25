import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Info, FileText, Train, Car, Footprints } from 'lucide-react';
import { AppointmentButton } from '../layout/AppointmentButton';

export function ContactMap() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Accès & Informations du Cabinet</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez toutes les informations utiles pour organiser votre visite : adresse, accès,
            horaires et plan d’accès au cabinet.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Accès au cabinet dentaire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Notre cabinet dentaire est situé au{' '}
                  <strong>49 bis rue Carnot à Romilly-sur-Seine</strong>, à proximité immédiate du
                  centre-ville et de la gare de Romilly-sur-Seine (environ 2 minutes à pied).
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <Train className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">En train</h4>
                      <p className="text-muted-foreground text-sm">
                        Le cabinet se trouve à quelques minutes à pied de la gare.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">En voiture</h4>
                      <p className="text-muted-foreground text-sm">
                        Stationnement facile dans le grand parking gratuit de la gare, situé à
                        seulement 2 minutes à pied du cabinet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Footprints className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">À pied</h4>
                      <p className="text-muted-foreground text-sm">
                        Accès rapide depuis le centre-ville et les commerces.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Pour toute question ou besoin d’indications, n’hésitez pas à nous contacter.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 rounded-lg overflow-hidden h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.524883981297!2d3.72700781567437!3d48.51499737930682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eecf9913c2259f%3A0x68fadc13095e0f11!2s49%20Bis%20Rue%20Carnot%2C%2010100%20Romilly-sur-Seine%2C%20France!5e0!3m2!1sen!2sus!4v1708865830000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte du Cabinet Dentaire Echetouani Charon sur google maps"
            ></iframe>
          </div>
        </div>
        <div className="mt-5">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Informations pratiques</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <p className="text-muted-foreground text-sm">
                      Prise en charge par la Sécurité Sociale et mutuelles.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Tiers payant, CMU, ACS acceptés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Documents</h4>
                    <p className="text-muted-foreground text-sm">
                      Pensez à votre Carte Vitale, attestation de mutuelle, et ordonnances.
                    </p>
                  </div>
                </div>
              </div>

              <AppointmentButton className="w-full font-semibold" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
