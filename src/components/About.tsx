import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function About() {
  const qualifications = [
    "LWK-zertifiziert",
    "Baumkontrolleurin",
    "SKT A/B",
    "Vollversichert",
  ];

  return (
    <section id="ueber-uns" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558598037-009fc10b73ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmJvcmlzdHMlMjB0ZWFtfGVufDF8fHx8MTc2NDc2Njk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laura & Maximilian von green LaMa"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-3xl -z-10 hidden lg:block"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full inline-block mb-4">
                ÜBER UNS
              </span>
              <h2 className="text-gray-900 mb-4">
                Ein kleines Team für große Bäume
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              Seit 2014 kümmern wir uns mit Leidenschaft und Fachkenntnis um Bäume in 
              Werne und Umgebung. Als Zwei-Personen-Team bieten wir Ihnen persönlichen 
              Service ohne Umwege.
            </p>

            <p className="text-gray-600">
              Laura und Maximilian – wir sind beide zertifizierte Baumpfleger mit 
              langjähriger Erfahrung in der Seilklettertechnik. Unsere Spezialisierung 
              liegt in der Bearbeitung großer und schwieriger Bäume, bei denen andere 
              passen müssen.
            </p>

            {/* Qualifications */}
            <div className="space-y-3 pt-4">
              <p className="text-gray-900">Unsere Qualifikationen:</p>
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{qual}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">
                FLL-geprüft
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">
                Regional verwurzelt
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">
                Persönliche Beratung
              </Badge>
            </div>

            <div className="pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                Mehr über uns
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
