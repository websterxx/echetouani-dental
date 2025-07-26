"use client";

import { useState, useRef, type MouseEvent, type TouchEvent } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeImageHint?: string;
  afterImageHint?: string;
}

export function ImageComparisonSlider({ beforeImage, afterImage, beforeImageHint, afterImageHint }: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full aspect-video select-none relative" ref={imageContainerRef}>
      <div 
        className="absolute inset-0"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <Image
          src={beforeImage}
          alt="Avant traitement"
          fill
          className="object-cover pointer-events-none"
          data-ai-hint={beforeImageHint}
        />
        <div
          className="absolute inset-0 w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt="Après traitement"
            fill
            className="object-cover pointer-events-none"
            data-ai-hint={afterImageHint}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
            <ChevronsLeftRight className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">AVANT</div>
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded" style={{ opacity: sliderPosition > 50 ? 1: 0, transition: 'opacity 0.2s'}}>APRÈS</div>
      </div>
    </div>
  );
}
