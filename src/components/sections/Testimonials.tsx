"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    if (testimonials[i + 1]) {
      testimonialPairs.push([testimonials[i], testimonials[i + 1]]);
    } else {
      testimonialPairs.push([testimonials[i]]);
    }
  }

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 2) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 2 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 2) % testimonials.length);
    resetInterval();
  };
  
  const currentPairIndex = Math.floor(activeIndex / 2);

  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ce que disent nos patients</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes fiers d'avoir créé tant de sourires sains et heureux.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
            <div className="relative w-full min-h-[550px] md:min-h-[300px]">
                {testimonialPairs.map((pair, pairIndex) => (
                    <div
                        key={pairIndex}
                        className={cn(
                            "absolute w-full transition-opacity duration-1000 ease-in-out",
                            currentPairIndex === pairIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {pair.map((testimonial) => (
                                <Card key={testimonial.name} className="shadow-lg w-full">
                                    <CardContent className="pt-6 flex flex-col text-center">
                                        <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                        </div>
                                        <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                                        <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Témoignage précédent</span>
                </Button>
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Témoignage suivant</span>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
