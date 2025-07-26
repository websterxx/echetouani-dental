"use client";

import { useState } from 'react';
import { services, type Service } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceDetailModal } from '@/components/services/ServiceDetailModal';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  return (
    <div>
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Nos Services Dentaires</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Des soins complets et spécialisés pour garder votre sourire sain et magnifique toute la vie.
          </p>
        </div>
      </header>
      <main className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(service)}
                className="group relative text-center p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer active:scale-95"
              >
                <ArrowRight className="absolute top-4 right-4 h-6 w-6 text-primary" />
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      {selectedService && (
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          service={selectedService}
        />
      )}
    </div>
  );
}