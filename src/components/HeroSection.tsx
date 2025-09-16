import React from "react";
import {
  Trophy,
  Target,
  Briefcase,
  Code,
  Tv,
  Mic,
} from "lucide-react";
import baniere from "../medias/images/profile/terence-11.jpg";

type HeroSectionProps = {
  currentPage: "sport" | "pro" | "contact" | "profile" | "blog";
};

export const HeroSection: React.FC<HeroSectionProps> = ({ currentPage }) => {
  // Couleur par défaut (pour pages génériques)
  let bgColor = "bg-gray-100 dark:bg-gray-800";
  switch (currentPage) {
    case "sport":
      bgColor =
        "bg-gradient-to-br from-blue-600 via-indigo-700 to-gray-900 dark:from-blue-700 dark:via-indigo-800 dark:to-gray-950";
      break;
    case "pro":
      bgColor =
        "bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900 dark:from-teal-700 dark:via-teal-800 dark:to-black";
      break;
    case "profile":
      bgColor = "bg-gray-100 dark:bg-gray-800";
      break;
    case "contact":
      bgColor =
        "bg-gradient-to-br from-orange-600/70 via-red-700/80 to-gray-700 dark:from-orange-700/80 dark:via-red-800/80 dark:to-gray-900";
      break;
    case "blog":
      bgColor =
        "bg-gradient-to-br from-purple-600/70 via-purple-700/80 to-gray-800 dark:from-purple-700/80 dark:via-purple-800/80 dark:to-gray-950";
      break;
  }

  /** ===== SPORT ===== */
  if (currentPage === "sport") {
    return (
      <section className={`relative ${bgColor} text-white dark:text-gray-100`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border-6 border-white dark:border-gray-200 rounded-full" />
          <div className="absolute top-20 right-20 w-24 h-24 border-4 border-white dark:border-gray-200 rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-2 border-white dark:border-gray-200 rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6">
            Athlète Semi-Professionnel • Canoë Slalom & Kayak Cross
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Trophy size={20} />
              <span>Médaillé International</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target size={20} />
              <span>Top 100 Mondial</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** ===== PRO ===== */
  if (currentPage === "pro") {
    return (
      <section className={`relative ${bgColor} text-white dark:text-gray-100`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-12 w-32 h-32 border-6 border-white dark:border-gray-200 rounded-xl rotate-6" />
          <div className="absolute bottom-12 right-16 w-24 h-24 border-2 border-white dark:border-gray-200 rounded-xl -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-white dark:border-gray-200 rounded-xl" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6 text-blue-100 dark:text-blue-200">
            Ingénieur IT • Développeur Web
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200 dark:text-blue-300">
            <div className="flex items-center space-x-2">
              <Briefcase size={20} />
              <span>Expérience Full-Stack</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code size={20} />
              <span>Projets Cloud & IA</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** ===== BLOG ===== */
  if (currentPage === "blog") {
    return (
      <section className={`relative ${bgColor} text-white dark:text-gray-100`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border-8 border-white dark:border-sky-950 rounded-xl rotate-6" />
          <div className="absolute top-20 right-20 w-24 h-24 border-6 border-white dark:border-sky-950 rounded-xl" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-4 border-white dark:border-gray-200 rounded-xl -rotate-6" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6">
            Article de presse • TV • Radio • Blog
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Tv size={20} />
              <span>30 min de temps d'écran</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mic size={20} />
              <span>Interview</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** ===== CONTACT ===== */
  if (currentPage === "contact") {
    return (
      <section className={`relative ${bgColor} text-white dark:text-gray-100`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border-5 border-white dark:border-gray-200 rounded-full" />
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white dark:border-gray-200 rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-3 border-white dark:border-gray-200 rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-2xl md:text-2xl mb-6">
            Restons en Contact
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            Que ce soit pour une collaboration professionnelle, un partenariat
            sportif, ou simplement échanger sur nos passions communes, n'hésitez
            pas à me contacter !
          </div>
        </div>
      </section>
    );
  }

  /** ===== PROFILE ===== */
  if (currentPage === "profile") {
    return (
      <section className="relative mx-auto px-6 py-6">
        <div className="absolute inset-0 h-32">
          <img
            src={baniere}
            alt="Bannière profil"
            className="w-full h-full object-cover object-[80%]"
          />
        </div>
      </section>
    );
  }

  /** ===== Générique ===== */
  return (
    <section
      className={`relative ${bgColor} text-white dark:text-gray-100 h-[10vh] flex items-center justify-center`}
    >
      <div className="text-center px-4">
        <h1 className="text-3xl font-semibold capitalize">{currentPage} Page</h1>
      </div>
    </section>
  );
};

export default HeroSection;
