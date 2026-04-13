import { cases } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageComparisonSlider } from '@/components/ui/ImageComparisonSlider';

export const metadata = {
  title: 'Cas Cliniques Dentaires à Romilly-sur-Seine | Avant / Après',
  description:
    'Découvrez les résultats de nos soins dentaires à Romilly-sur-Seine : implants, esthétique dentaire et transformations avant/après réalisées par le cabinet Echetouani Charron.',
};

const casesSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Cas Cliniques Dentaires',
  description: 'Avant et après de traitements dentaires réalisés à Romilly-sur-Seine',
  about: {
    '@type': 'Dentist',
    name: 'Cabinet Dentaire Echetouani Charron',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '49 Bis Rue Carnot',
      postalCode: '10100',
      addressLocality: 'Romilly-sur-Seine',
      addressCountry: 'FR',
    },
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: cases.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
    })),
  },
};

export default function CasesPage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-nickainley">
            Cas Cliniques Dentaires
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Le cabinet dentaire Echetouani Charron présente ses cas cliniques réalisés à
            Romilly-sur-Seine : implants dentaires, soins esthétiques et réhabilitations complètes
            du sourire. Chaque traitement est personnalisé pour garantir un résultat naturel,
            fonctionnel et durable.
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageComparisonSlider
                    beforeImage={caseItem.beforeImage}
                    afterImage={caseItem.afterImage}
                    beforeImageHint={caseItem.beforeImageHint}
                    afterImageHint={caseItem.afterImageHint}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(casesSchema),
        }}
      />
    </div>
  );
}
