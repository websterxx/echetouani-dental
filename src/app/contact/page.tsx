
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { doctors } from "@/lib/data";
import { toast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { sendContactEmail } from "@/components/services/emailService";


type ContactFormValues = {
  email: string;
  phone: string;
  doctor: string;
  reason: string;
  message: string;
  contactMethod: "email" | "phone";
};

const defaultValues: ContactFormValues = {
  email: "",
  phone: "",
  doctor: "",
  reason: "",
  message: "",
  contactMethod: "email",
};

const reasons = [
    "Prise de rendez-vous",
    "Question sur un traitement",
    "Urgence dentaire",
    "Autre"
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormValues | null>(null);

  const form = useForm<ContactFormValues>({
    defaultValues,
    reValidateMode: 'onChange',
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    control
  } = form;

  async function onSubmit(data: ContactFormValues) {
    try {
      await sendContactEmail(data);
      toast({
        title: "Formulaire envoyé !",
        description: "Nous avons bien reçu votre message et nous vous contacterons bientôt.",
      });
      reset();
    } catch (error) {
      console.error("Failed to send email", error);
      toast({
        variant: "destructive",
        title: "Erreur d'envoi",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
      });
    }
  }

  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une urgence ? Remplissez le formulaire ou retrouvez nos coordonnées ci-dessous.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625997239!2d3.398935815674394!3d49.0454689793068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e85f5e5d3d4e6b%3A0x8e8b6b2d3e4c4d1!2s13%20Rue%20Jean%20de%20la%20Fontaine%2C%2002400%20Ch%C3%A2teau-Thierry%2C%20France!5e0!3m2!1sen!2sus!4v1622556677889!5m2!1sen!2sus"
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
                  </div>
                </CardContent>
              </Card>

            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-lg h-full">
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
                  <div className="flex-grow space-y-6">
                    <p className="text-sm">Les champs avec un <span className="text-destructive">*</span> sont obligatoires.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={control}
                        name="email"
                        rules={{
                          required: "Veuillez entrer une adresse email.",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide.",
                          },
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
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
                          required: "Veuillez entrer un numéro de téléphone.",
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone <span className="text-destructive">*</span></FormLabel>
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
                      name="doctor"
                      rules={{ required: "Veuillez sélectionner un docteur." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Docteur <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un docteur" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {doctors.map((doc, index) => (
                                <SelectItem key={index} value={`${doc.email}`}>
                                  Dr. {doc.firstName} {doc.lastName}
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
                      name="reason"
                      rules={{ required: "Veuillez sélectionner un motif." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Motif de la consultation <span className="text-destructive">*</span></FormLabel>
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
                        required: "Veuillez écrire votre message.",
                        minLength: {
                          value: 10,
                          message: "Votre message doit contenir au moins 10 caractères.",
                        },
                        maxLength: {
                            value: 500,
                            message: "Votre message ne peut pas dépasser 500 caractères.",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
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
                      rules={{ required: "Veuillez sélectionner une méthode de contact." }}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Préférez-vous être recontacté par : <span className="text-destructive">*</span></FormLabel>
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
                  <Button type="submit" size="lg" className="w-full mt-8">Envoyer le message</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
