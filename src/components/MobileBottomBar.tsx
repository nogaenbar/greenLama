import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white rounded-full"
            size="lg"
            asChild
          >
            <a href="tel:+491234567890">
              <Phone className="w-5 h-5 mr-2" />
              Anrufen
            </a>
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full"
            size="lg"
            asChild
          >
            <a href="#kontakt">
              <MessageCircle className="w-5 h-5 mr-2" />
              Nachricht
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
