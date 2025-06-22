import React from "react";
import { Briefcase, GraduationCap, BadgeCheck } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  date: string;
};

type Education = {
  diploma: string;
  school: string;
  date: string;
};

const CvSection: React.FC = () => {
  const profile = {
    name: "Mouhamadou Mansour Sow",
    title: "Comptable",
    location: "Dakar, Sénégal",
    phone: "+221 77 586 08 29",
    email: "mouhamadoumansoursow@yahoo.com",
    birthday: "07/04/1994",
  };

  const experiences: Experience[] = [
    {
      title: "CEO",
      company: "DK TUNING",
      date: "Depuis Sept. 2021",
    },
    {
      title: "Comptable",
      company: "Zeltex SA (KALIA)",
      date: "Déc. 2019 - Août 2021",
    },
    {
      title: "Auditeur / Assistant comptable",
      company: "Cabinet AKM Audit & Conseil",
      date: "2015 - 2019",
    },
  ];

  const education: Education[] = [
    { diploma: "DESCOGEF", school: "En cours", date: "2024 - 2025" },
    { diploma: "DSC", school: "ESP", date: "2016 - 2017" },
    { diploma: "Master 1", school: "UCAO Saint Michel", date: "2015 - 2016" },
    {
      diploma: "BTS + Licence 3",
      school: "UCAO Saint Michel",
      date: "2014 - 2015",
    },
    { diploma: "DEC", school: "ESP", date: "2013 - 2014" },
  ];

  const skills: string[] = [
    "Excel & VBA",
    "Sage Compta / Paie / ETAFIN",
    "PHP, HTML, CSS, javascript, react",
    "ETAX, MONESPACEPERSO",
    "Automatisation de documents",
  ];

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mon Parcours
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Profil */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="text-blue-400">{profile.title}</p>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>📍 {profile.location}</li>
              <li>📞 {profile.phone}</li>
              <li>📧 {profile.email}</li>
              <li>🎂 {profile.birthday}</li>
            </ul>
          </div>

          {/* Expériences */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Expérience</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-3">
              {experiences.map((exp, i) => (
                <li key={i}>
                  <span className="text-white font-medium">{exp.title}</span> –{" "}
                  {exp.company}
                  <br />
                  <span className="text-gray-400 text-xs">{exp.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Formation</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-3">
              {education.map((edu, i) => (
                <li key={i}>
                  🎓{" "}
                  <span className="text-white font-medium">{edu.diploma}</span>{" "}
                  – {edu.school}
                  <br />
                  <span className="text-gray-400 text-xs">{edu.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compétences */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <BadgeCheck className="text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Compétences</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvSection;
