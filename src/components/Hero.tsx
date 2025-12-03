import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="start" className="bg-gradient-to-b from-green-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full">
                Zertifizierte Baumpflege in Werne
              </span>
            </div>
            
            <h1 className="text-gray-900">
              Baumpflege & Baumfällungen – sicher, professionell, persönlich.
            </h1>
            
            <p className="text-gray-600 text-lg">
              Spezialisiert auf große und schwierige Bäume. Mit zertifizierter Expertise und 
              schonender Arbeitsweise kümmern wir uns um die Bäume auf Ihrem Grundstück.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 py-6"
                size="lg"
              >
                Unverbindliches Angebot anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Reassurance */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Antwort meist innerhalb von 24 Stunden
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmJvcmlzdCUyMHRyZWUlMjBjbGltYmluZyUyMHNhZmV0eXxlbnwxfHx8fDE3NjQ3NjY5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professionelle Baumpflege"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-3xl -z-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
