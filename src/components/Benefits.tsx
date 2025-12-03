import { Award, TreePine, Leaf, Users } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Award,
      title: "Zertifizierte Baumpfleger",
      description: "LWK-zertifiziert, Seilklettertechnik A/B",
    },
    {
      icon: TreePine,
      title: "Spezialisiert auf große & schwierige Bäume",
      description: "Expertise in komplexen Fällarbeiten",
    },
    {
      icon: Leaf,
      title: "Schonende Arbeit auf Ihrem Grundstück",
      description: "Respektvoller Umgang mit Ihrer Immobilie",
    },
    {
      icon: Users,
      title: "Direkter Kontakt",
      description: "Nur Laura & Maximilian – persönlich und zuverlässig",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Warum green LaMa?</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
