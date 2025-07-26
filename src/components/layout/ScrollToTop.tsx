"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'transition-opacity',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Retour en haut"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
}