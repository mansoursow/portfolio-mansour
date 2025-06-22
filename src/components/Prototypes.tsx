import React from 'react';
import { Calculator, Gamepad2, Wallet, BarChart, Globe, Database } from 'lucide-react';

const Prototypes = () => {
  const prototypes = [
    {
      title: 'ERP Comptable Intelligent',
      description: 'Système de gestion comptable avec IA pour l\'automatisation des tâches financières',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
    },
  
    {
      title: 'Wallet Virtuel',
      description: 'Portefeuille numérique sécurisé avec gestion multi-devises et blockchain',
      icon: Wallet,
      color: 'from-green-500 to-emerald-500',
      technologies: ['React Native', 'Blockchain', 'Crypto APIs', 'Firebase']
    },

  ];

  return (
    <section id="prototypes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Prototypes & Projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une sélection de mes projets innovants et solutions technologiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prototypes.map((prototype, index) => (
            <div 
              key={prototype.title}
              className="group relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${prototype.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <prototype.icon size={24} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {prototype.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                  {prototype.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {prototype.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded-md text-xs text-gray-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:text-blue-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                  <span className="text-sm font-medium">Voir le projet</span>
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prototypes;