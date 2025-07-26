'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isLinkActive = pathname === href;

    return (
      <Link
        href={href}
        className={cn(
          'font-semibold hover:scale-105 transition-transform',
          isLinkActive ? 'text-primary' : 'text-foreground/80'
        )}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed shadow top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between pl-5">
        <Link href="/" className="flex items-center">
          {mounted && <span className="text-xl font-bold text-black dark:text-white">Cabinet Dentaire Echetouani</span>}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <AppointmentButton className="hidden lg:flex font-semibold" />
          {mounted && (
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              <span className="sr-only">Changer de thème</span>
            </Button>
          )}
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
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
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {mounted && <span className="font-bold text-black dark:text-white">Cabinet Dentaire Echetouani</span>}
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium',
                        pathname === link.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
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
