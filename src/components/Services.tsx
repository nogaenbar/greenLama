import { Search, Scissors, Axe, Bug, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Baumkontrolle",
      description: "Professionelle Baumkontrolle nach FLL-Richtlinien für Ihre Verkehrssicherheit",
      image: "https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwaW5zcGVjdGlvbiUyMGFyYm9yaXN0fGVufDF8fHx8MTc2NDc2Njk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Scissors,
      title: "Baumpflege",
      description: "Fachgerechter Baumschnitt für gesunde und vitale Bäume",
      image: "https://images.unsplash.com/photo-1754321889123-0485c7fea5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcHJ1bmluZyUyMGNhcmV8ZW58MXx8fHwxNzY0NzY2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Axe,
      title: "Baumfällungen",
      description: "Sichere Fällung großer und schwieriger Bäume mit Seilklettertechnik",
      image: "https://images.unsplash.com/photo-1663436295685-4ad55cb30362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwZmVsbGluZyUyMGNoYWluc2F3fGVufDF8fHx8MTc2NDc2Njk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Bug,
      title: "Eichenprozessionsspinner",
      description: "Fachgerechte Entfernung der gesundheitsgefährdenden Raupen",
      image: "https://images.unsplash.com/photo-1740853029575-ae5a0f997949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMG9hayUyMHRyZWV8ZW58MXx8fHwxNzY0NzY2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full inline-block mb-4">
            UNSERE LEISTUNGEN
          </span>
          <h2 className="text-gray-900 mb-4">
            Professionelle Baumpflege für jeden Bedarf
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Von der ersten Kontrolle bis zur fachgerechten Fällung – wir kümmern uns um alle 
            Aspekte der Baumpflege und sorgen für eine saubere Entsorgung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button className="text-green-600 hover:text-green-700 text-sm flex items-center gap-2 group">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8"
          >
            Alle Leistungen ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
