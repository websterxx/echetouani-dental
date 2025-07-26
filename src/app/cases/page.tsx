
import { cases } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageComparisonSlider } from '@/components/ui/ImageComparisonSlider';

export const metadata = {
  title: 'Cas Cliniques | Cabinet Dentaire Echetouani',
  description: 'Découvrez les transformations spectaculaires que nous avons réalisées pour nos patients. Parcourez notre galerie avant/après pour divers traitements dentaires.',
};

export default function CasesPage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Notre Travail</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une vitrine des résultats qui changent la vie et des magnifiques sourires que nous créons chaque jour pour nos patients.
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
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
    </div>
  );
}
