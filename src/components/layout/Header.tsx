'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils/cn';
import { AppointmentButton } from './AppointmentButton';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/doctor-office', label: 'Docteurs & Cabinet' },
  { href: '/cases', label: 'Cas Cliniques' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isLinkActive = pathname === href;

    return (
      <Link
        href={href}
        className={cn(
          'font-semibold hover:scale-105 transition-transform',
          isLinkActive ? 'text-primary' : 'text-foreground/80',
        )}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed shadow top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-24 items-center justify-between pl-5">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logSansBackGround.png"
            alt="Logo Cabinet Dentaire Echetouani"
            className="w-20 h-20 object-contain"
          />
          <span className="text-xl font-pacifico text-primary">Cabinet Echetouani Charon</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <AppointmentButton className="hidden xl:flex font-semibold" />

          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Naviguez sur le site du Cabinet Dentaire Echetouani.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
                  <span className="font-bold text-black">Cabinet Dentaire Echetouani</span>
                </Link>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground',
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <AppointmentButton className="font-semibold" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
