import React from "react";
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:mouhamadoumansoursow@yahoo.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Restons en Contact
            </span>
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Prêt à transformer vos idées en réalité numérique ? Contactez-moi
            pour discuter de votre prochain projet.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20"
                aria-label={link.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <link.icon
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 relative z-10"
                />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">
              <a
                href="mailto:mouhamadoumansoursow@yahoo.com"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                mouhamadoumansoursow@yahoo.com
              </a>
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>Développé avec</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>par</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                Mouhamadou Mansour sow
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 Tous droits réservés. Créé avec React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
