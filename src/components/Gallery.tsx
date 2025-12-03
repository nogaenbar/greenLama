import { useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmJvcmlzdCUyMHRyZWUlMjBjbGltYmluZyUyMHNhZmV0eXxlbnwxfHx8fDE3NjQ3NjY5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Seilklettertechnik im Einsatz",
    },
    {
      url: "https://images.unsplash.com/photo-1663436295685-4ad55cb30362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwZmVsbGluZyUyMGNoYWluc2F3fGVufDF8fHx8MTc2NDc2Njk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professionelle Baumfällung",
    },
    {
      url: "https://images.unsplash.com/photo-1754321889123-0485c7fea5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcHJ1bmluZyUyMGNhcmV8ZW58MXx8fHwxNzY0NzY2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Baumpflege und Kronenschnitt",
    },
    {
      url: "https://images.unsplash.com/photo-1763515188616-b72e33065350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcmVtb3ZhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ3NjY5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Moderne Ausrüstung",
    },
    {
      url: "https://images.unsplash.com/photo-1740853029575-ae5a0f997949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMG9hayUyMHRyZWV8ZW58MXx8fHwxNzY0NzY2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Große Bäume unsere Spezialität",
    },
    {
      url: "https://images.unsplash.com/photo-1558598037-009fc10b73ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmJvcmlzdHMlMjB0ZWFtfGVufDF8fHx8MTc2NDc2Njk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Team bei der Arbeit",
    },
  ];

  return (
    <section id="referenzen" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full inline-block mb-4">
            UNSERE ARBEIT
          </span>
          <h2 className="text-gray-900 mb-4">
            Einblicke in unsere Arbeit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Von der Baumkontrolle bis zur finalen Fällung – sehen Sie unsere Expertise in Aktion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
