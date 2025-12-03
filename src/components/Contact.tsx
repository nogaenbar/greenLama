import { Phone, Mail, MapPin, Upload, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full inline-block mb-4">
            KONTAKT
          </span>
          <h2 className="text-gray-900 mb-4">
            Unverbindliches Angebot für Ihren Baum
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beschreiben Sie uns kurz Ihr Anliegen oder rufen Sie uns direkt an. 
            Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen zurück.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Contact Info */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 md:p-12 text-white">
                <h3 className="text-white mb-6">Kontaktieren Sie uns direkt</h3>
                
                <div className="space-y-6">
                  <a 
                    href="tel:+491234567890"
                    className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-xl transition-colors group"
                  >
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Rufen Sie uns an</p>
                      <p className="text-white">+49 (123) 456-7890</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@greenlama.de"
                    className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-xl transition-colors group"
                  >
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Schreiben Sie uns</p>
                      <p className="text-white">info@greenlama.de</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Unser Standort</p>
                      <p className="text-white">Werne & Umgebung<br />Nordrhein-Westfalen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">WhatsApp</p>
                      <p className="text-white">+49 (123) 456-7890</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-green-100 text-sm">
                    Montag - Freitag: 8:00 - 18:00 Uhr<br />
                    Samstag: 9:00 - 14:00 Uhr
                  </p>
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="Ihr Name" 
                        className="mt-2 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        placeholder="Ihre Telefonnummer" 
                        className="mt-2 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">E-Mail</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="Ihre E-Mail" 
                        className="mt-2 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Ort / PLZ *</Label>
                      <Input 
                        id="location"
                        type="text" 
                        placeholder="z.B. Werne, 59368" 
                        className="mt-2 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Beschreiben Sie Ihr Anliegen *</Label>
                    <Textarea 
                      id="message"
                      placeholder="z.B. Große Eiche im Garten muss gefällt werden, Höhe ca. 20m..."
                      className="mt-2 rounded-xl min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="photos">Foto Ihres Baums hochladen (optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">
                        Klicken Sie hier oder ziehen Sie Fotos hierher
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        PNG, JPG bis zu 10MB
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6"
                  >
                    Anfrage senden
                  </Button>

                  <p className="text-gray-500 text-xs text-center">
                    Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-green-600" />
                <p>Werne & Umgebung</p>
                <p className="text-sm">Nordrhein-Westfalen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
