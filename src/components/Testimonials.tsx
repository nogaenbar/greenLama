import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Sehr professionelle und sorgfältige Arbeit. Die Baumfällung auf unserem engen Grundstück war eine Herausforderung, aber Laura und Maximilian haben alles perfekt gemeistert. Absolut empfehlenswert!",
      author: "Familie Schmidt",
      location: "Werne",
      rating: 5,
    },
    {
      text: "Endlich ein Team, das auch große Bäume problemlos bewältigt. Die Beratung war sehr kompetent und der Preis fair. Wir werden green LaMa definitiv wieder beauftragen.",
      author: "Herr Müller",
      location: "Selm",
      rating: 5,
    },
    {
      text: "Schnelle Terminvergabe, zuverlässige Durchführung und saubere Arbeit. Das Grundstück wurde respektvoll behandelt. Vielen Dank!",
      author: "Frau Weber",
      location: "Bergkamen",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 tracking-wide text-sm bg-green-100 px-4 py-2 rounded-full inline-block mb-4">
            KUNDENSTIMMEN
          </span>
          <h2 className="text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zufriedene Kunden sind unser bestes Kompliment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-green-600 mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-green-100 pt-4">
                <p className="text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900">4.9 von 5.0</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-600">42 Bewertungen bei Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
