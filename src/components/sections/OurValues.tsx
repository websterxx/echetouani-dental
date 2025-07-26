import { values } from '@/lib/data';

export function OurValues() {
  return (
    <section id="values" className="py-16 sm:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Notre Engagement Envers Vous</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous nous engageons à offrir une expérience dentaire exceptionnelle fondée sur la confiance et la qualité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}