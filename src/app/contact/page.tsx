'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { sendContactEmail } from '@/components/services/emailService';

type ContactFormValues = {
  email: string;
  phone: string;
  reason: string;
  message: string;
  contactMethod: 'email' | 'phone';
};

const defaultValues: ContactFormValues = {
  email: '',
  phone: '',
  reason: '',
  message: '',
  contactMethod: 'email',
};

const reasons = ['Prise de rendez-vous', 'Question sur un traitement', 'Urgence dentaire', 'Autre'];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormValues | null>(null);

  const form = useForm<ContactFormValues>({
    defaultValues,
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const { handleSubmit, reset, control } = form;

  async function onSubmit(data: ContactFormValues) {
    try {
      await sendContactEmail(data);
      toast({
        title: 'Formulaire envoyé !',
        description: 'Nous avons bien reçu votre message et nous vous contacterons bientôt.',
      });
      reset();
    } catch (error) {
      console.error('Failed to send email', error);
      toast({
        variant: 'destructive',
        title: "Erreur d'envoi",
        description:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
      });
    }
  }

  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contactez-nous</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une urgence ? Remplissez le formulaire ou retrouvez nos coordonnées
            ci-dessous.
          </p>
        </div>
      </header>
      <main className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.524883981297!2d3.72700781567437!3d48.51499737930682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eecf9913c2259f%3A0x68fadc13095e0f11!2s49%20Bis%20Rue%20Carnot%2C%2010100%20Romilly-sur-Seine%2C%20France!5e0!3m2!1sen!2sus!4v1708865830000!5m2!1sen!2sus"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte du Cabinet Dentaire Echetouani sur Google Maps"
                ></iframe>
              </div>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Adresse</h4>
                        <p className="text-muted-foreground">
                          49 Bis Rue Carnot, 10100 Romilly-sur-Seine
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Téléphone</h4>
                        <p className="text-muted-foreground">03 68 89 06 70</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">Cabinetdentaireromilly@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Horaires d'Ouverture</h4>
                        <p className="text-muted-foreground">Lun - Ven : 9h - 18h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-lg h-full">
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
                  <div className="flex-grow space-y-8">
                    <p className="text-sm">
                      Les champs avec un <span className="text-destructive">*</span> sont
                      obligatoires.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={control}
                        name="email"
                        rules={{
                          required: 'Veuillez entrer une adresse email.',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Adresse email invalide.',
                          },
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Email <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="votre.email@exemple.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name="phone"
                        rules={{
                          required: 'Veuillez entrer un numéro de téléphone.',
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Téléphone <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+33 1 23 45 67 89" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={control}
                      name="reason"
                      rules={{ required: 'Veuillez sélectionner un motif.' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Motif de contact <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un motif" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {reasons.map((reason, index) => (
                                <SelectItem key={index} value={reason}>
                                  {reason}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="message"
                      rules={{
                        required: 'Veuillez écrire votre message.',
                        minLength: {
                          value: 10,
                          message: 'Votre message doit contenir au moins 10 caractères.',
                        },
                        maxLength: {
                          value: 500,
                          message: 'Votre message ne peut pas dépasser 500 caractères.',
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Message <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Écrivez votre message ici..."
                              className="resize-none"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <p className="text-sm">(Entre 10 et 500 caractères)</p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="contactMethod"
                      rules={{ required: 'Veuillez sélectionner une méthode de contact.' }}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>
                            Préférez-vous être recontacté par :{' '}
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="email" />
                                </FormControl>
                                <FormLabel className="font-normal">Email</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="phone" />
                                </FormControl>
                                <FormLabel className="font-normal">Téléphone</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full mt-8">
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
