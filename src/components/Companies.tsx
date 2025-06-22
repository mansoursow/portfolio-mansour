import { Car, ShoppingCart, FileText } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      name: "DK Tuning",
      description:
        "Garage automobile spécialisé dans la personnalisation et la performance des véhicules.",
      icon: Car,
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-500/30",
    },
    {
      name: "DM-GP",
      description:
        "Solution e-commerce complète avec système de gestion logistique intégré.",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
    {
      name: "Compta IA",
      description:
        "un prototype d’ERP intelligent dédié à l’automatisation de la comptabilité. Il intègre l’IA pour extraire automatiquement les données des factures, les classer, et générer les écritures comptables conformément aux normes Syscohada.",
      icon: FileText,
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-500/10 to-amber-500/10",
      borderColor: "border-yellow-500/30",
    },
  ];

  return (
    <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mes Entreprises
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets entrepreneuriaux que j'ai développés dans
            différents secteurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border ${company.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${company.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${company.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <company.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {company.name}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {company.description}
                </p>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
