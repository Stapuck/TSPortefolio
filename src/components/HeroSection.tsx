import React from "react";
import {
  Trophy,
  Target,
  Briefcase,
  Code,
  Tv,
  Mic,
  IdCardLanyard,
  BookUser,
} from "lucide-react";
import baniere from "../medias/images/profile/terence-11.jpg";

type HeroSectionProps = {
  currentPage: "sport" | "pro" | "contact" | "profile" | "blog";
};

export const HeroSection: React.FC<HeroSectionProps> = ({ currentPage }) => {
  let bgColor = "bg-gray-700";
  switch (currentPage) {
    case "sport":
      // bgColor = "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800";
      bgColor = "bg-gradient-to-br from-blue-600 via-indigo-700 to-gray-900";
      break;
    case "pro":
      bgColor = "bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900";
      break;
    case "profile":
      bgColor = "bg-gray-700";
      break;
    case "contact":
      bgColor = "bg-gradient-to-br from-red-600/70 via-red-700/80 to-gray-800";
      break;
    case "blog":
      bgColor =
        "bg-gradient-to-br from-purple-600/70 via-purple-700/80 to-gray-800";
      break;
  }

  /** ====== PAGE SPORT : ====== */
  if (currentPage === "sport") {
    return (
      // <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-gray-800 text-white">
      <section className={`relative ${bgColor} text-white`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border border-white rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terence Saramandif
          </h1> */}
          <p className="text-xl md:text-2xl mb-6 text-white">
            Athlète Semi-Professionnel • Canoë Slalom & Kayak Cross
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <Trophy size={20} />
              <span>Médaillé International</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target size={20} />
              {/* <span>Top 15 Mondial</span> */}
              <span>Top 100 Mondial</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** === PRO : bannière professionnelle === */
  if (currentPage === "pro") {
    return (
      // <section className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-gray-900 text-white">
      <section className={`relative ${bgColor} text-white`}>
        {/* décor techno */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-12 w-32 h-32 border border-white rounded-xl rotate-6" />
          <div className="absolute bottom-12 right-16 w-24 h-24 border border-white rounded-xl -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white rounded-xl" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Terence Saramandif
          </h1> */}
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            {/* Ingénieur IT • Développeur Web & IA */}
            Ingénieur IT • Développeur Web
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200">
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

  /** ====== PAGE BLOG : ====== */
  if (currentPage === "blog") {
    return (
      // <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-gray-800 text-white">
      <section className={`relative ${bgColor} text-white`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border border-white rounded-xl rotate-6" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-xl" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border border-white rounded-xl -rotate-6" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terence Saramandif
          </h1> */}
          <p className="text-xl md:text-2xl mb-6 text-white">
            Article de presse • TV • Radio • Blog
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <Tv size={20} />
              <span>30 min de temps d'ecran </span>
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

  /** ====== PAGE CONTACT : ====== */
  if (currentPage === "contact") {
    return (
      // <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-gray-800 text-white">
      <section className={`relative ${bgColor} text-white`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border border-white rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terence Saramandif
          </h1> */}
          <p className="text-xl md:text-2xl mb-6 text-white">
            Une idée de projet pro ? • Envie de me Sponsorisé
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <IdCardLanyard size={20} />
              <span>???</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookUser size={20} />
              <span>Rejoins mon Réseau</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** ====== PAGE PROFILE : ====== */
  if (currentPage === "profile") {
    return (
      <section className="relative mx-auto px-6 py-6">
        {/* <div className="absolute inset-0 h-51 "> */}
        <div className="absolute inset-0 h-32 ">
          <img
            src={baniere}
            alt="Bannière profil"
            className="w-full h-full object-cover object-[80%]"
          />
        </div>
      </section>
    );
  }

  /** ====== PAGES GÉNÉRIQUES ====== */
  return (
    <section
      className={`relative ${bgColor} text-white h-[10vh] flex items-center justify-center`}
    >
      <div className="text-center px-4">
        <h1 className="text-3xl font-semibold capitalize">
          {currentPage} Page
        </h1>
      </div>
    </section>
  );
};
export default HeroSection;
