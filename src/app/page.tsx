import { Hero } from '@/components/sections/Hero';
import { DoctorsPreview } from '@/components/sections/DoctorsPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { OurValues } from '@/components/sections/OurValues';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactMap } from '@/components/sections/ContactMap';

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorsPreview />
      <ServicesPreview />
      <OurValues />
      <Testimonials />
      <ContactMap />
    </>
  );
}
