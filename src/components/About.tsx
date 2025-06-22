import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Frontend",
      icon: Globe,
      techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Backend",
      icon: Database,
      techs: ["Node.js", "MangoDB"],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      techs: ["React Native", "Flutter", "Progressive Web Apps"],
    },
    { name: "Outils", icon: Code, techs: ["Git", "GitHub", "Docker", "AWS"] },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Comptable confirmé, développeur web full-stack et entrepreneur
              engagé, je transforme les besoins métier en solutions digitales
              intelligentes. Mon objectif : automatiser, optimiser et innover au
              service de la performance.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Avec plus de 7 ans d’expérience en comptabilité, dont plusieurs
              années au sein du cabinet AKM Audit & Conseil, j’ai su allier
              rigueur financière et passion pour l’innovation technologique. En
              parallèle de mon parcours comptable, je me suis formé au
              développement web full-stack, en maîtrisant des technologies
              modernes comme React et Node.js. Aujourd’hui, en tant
              qu’entrepreneur, j’ai fondé DK Tuning, une entreprise automobile,
              et je développe des solutions innovantes comme Compta IA, un ERP
              intelligent qui automatise la comptabilité de A à Z, et DM-GP, une
              plateforme de livraison qui révolutionne l’e-commerce en Afrique
              en permettant d’acheter partout en ligne et de se faire livrer
              chez soi. Mon ambition : repousser les frontières entre finance,
              technologie et entrepreneuriat, pour créer des produits digitaux à
              fort impact.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Innovation", "Performance", "Design", "Créativité"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {skill.techs.map((tech) => (
                      <div key={tech} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
