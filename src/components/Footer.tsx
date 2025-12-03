import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="bg-green-600 text-white px-3 py-2 rounded-lg inline-block mb-4">
              <span className="tracking-tight">green LaMa</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Zertifizierte Baumpflege und sichere Baumfällungen in Werne und Umgebung.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#start" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Start
                </a>
              </li>
              <li>
                <a href="#leistungen" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#referenzen" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Baumkontrolle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Baumpflege
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Baumfällungen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Eichenprozessionsspinner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Werne & Umgebung<br />
                  Nordrhein-Westfalen
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-400 hover:text-green-400 transition-colors">
                  +49 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:info@greenlama.de" className="text-gray-400 hover:text-green-400 transition-colors">
                  info@greenlama.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 green LaMa. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
