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
    <footer className="bg-secondary border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-semibold font-headline">Cabinet Echetouani Charon</span>
            <p className="text-sm pt-4">Un sourire sain commence ici.</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 font-headline">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Adresse : 49 Bis Rue Carnot, 10100 Romilly-sur-Seine</li>
              <li>Téléphone : 03 68 89 06 70</li>
              <li>Email : Cabinetdentaireromilly@gmail.com</li>
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
            <ul className="space-y-2 text-sm">
              <li>Lundi - Vendredi : 9h00 - 18h00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-t border-gray-300"></div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cabinet Echetouani Charon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
