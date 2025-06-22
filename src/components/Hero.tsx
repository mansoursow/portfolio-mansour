
import { Download, FileText, ChevronDown } from "lucide-react";
import profileImg from "../assets/photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl shadow-blue-500/20 animate-pulse-slow">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-ping"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block text-white mb-2">Bonjour, je suis</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Mouhamadou Mansour Sow
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            Comptable/Développeur/Entrepreuneur Passionné
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comptable de formation, titulaire de diplômes tels que le DEC, le
            BTS, le DSC et un Master en comptabilité, je cumule plus de 7 ans
            d’expérience professionnelle, notamment en cabinet. Entrepreneur
            engagé, j’ai fondé une SARL qui génère un chiffre d’affaires annuel
            de plus de 96 millions FCFA. Passionné par le développement web et
            les technologies de demain, je rêve de révolutionner le monde en
            créant des solutions digitales innovantes, alliant expertise métier,
            automatisation et impact social.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
  href="/cv.pdf"
  download
  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    <Download size={20} />
    Télécharger CV
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>


          <button className="group relative px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-blue-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white hover:shadow-2xl hover:shadow-blue-400/25">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FileText size={20} />
              Voir Portfolio
            </span>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
