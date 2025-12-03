import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                Werne & Umgebung
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+491234567890" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+49 (123) 456-7890</span>
              </a>
              <a href="mailto:info@greenlama.de" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@greenlama.de</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white px-3 py-2 rounded-lg">
              <span className="tracking-tight">green LaMa</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#start" className="text-gray-700 hover:text-green-600 transition-colors">
              Start
            </a>
            <a href="#leistungen" className="text-gray-700 hover:text-green-600 transition-colors">
              Leistungen
            </a>
            <a href="#ueber-uns" className="text-gray-700 hover:text-green-600 transition-colors">
              Über uns
            </a>
            <a href="#referenzen" className="text-gray-700 hover:text-green-600 transition-colors">
              Referenzen
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-green-600 transition-colors">
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
              Angebot anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#start" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Start
            </a>
            <a href="#leistungen" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Leistungen
            </a>
            <a href="#ueber-uns" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Über uns
            </a>
            <a href="#referenzen" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Referenzen
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-green-600 transition-colors py-2">
              Kontakt
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full">
              Angebot anfragen
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
