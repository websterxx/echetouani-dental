
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/doctor-office', label: 'Docteurs & Cabinet' },
  { href: '/cases', label: 'Cas Cliniques' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-semibold font-headline">Cabinet Dentaire Echetouani</span>
            <p className="text-sm text-muted-foreground pt-4">
              Un sourire sain commence ici.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 font-headline">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Adresse : 123 Avenue Dentaire, Paris, France</li>
              <li>Téléphone : +33 1 23 45 67 89</li>
              <li>Téléphone 2 : +33 9 87 65 43 21</li>
              <li>Email : contact@echetouani-dental.com</li>
              <li>Email 2 : secretariat@echetouani-dental.com</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 font-headline">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 font-headline">Horaires d'Ouverture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lundi - Vendredi : 9h00 - 18h00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cabinet Dentaire Marouane & Ahmed Echetouani. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
