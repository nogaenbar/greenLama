import { Award, Trees, Shield } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Jahre Erfahrung",
    },
    {
      icon: Trees,
      value: "1.000+",
      label: "Bäume gepflegt",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Versichert & zertifiziert",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100"
            >
              <div className="bg-green-600 text-white p-3 rounded-xl">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
