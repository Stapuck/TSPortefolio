import React from "react";
import { Trophy, Target, Briefcase, Code, Tv, Mic } from "lucide-react";
import baniere from "../medias/images/profile/terence-11.jpg";
import { useTranslation } from "react-i18next";

type HeroSectionProps = {
  currentPage: "sport" | "pro" | "contact" | "profile" | "blog";
};

export const HeroSection: React.FC<HeroSectionProps> = ({ currentPage }) => {
  const { t } = useTranslation();
  let bgColor = "bg-gray-100 dark:bg-gray-800";
  switch (currentPage) {
    case "sport":
      bgColor =
        "bg-gradient-to-br from-blue-500 via-indigo-700 to-gray-700 dark:from-indigo-800 dark:via-blue-700 dark:to-gray-800";
      break;
    case "pro":
      bgColor =
        "bg-gradient-to-br from-green-600 via-teal-700 to-gray-700 dark:from-teal-800 dark:via-green-900 dark:to-gray-800";
      break;
    case "profile":
      bgColor = "bg-gray-100 dark:bg-gray-800";
      break;
    case "contact":
      bgColor =
        "bg-gradient-to-br from-orange-700 via-pink-700 to-gray-700 dark:from-pink-700 dark:via-orange-800 dark:to-gray-800";
      break;
    case "blog":
      bgColor =
        "bg-gradient-to-br from-indigo-600 via-purple-700 to-gray-700 dark:from-purple-700 dark:via-indigo-800/70 dark:to-gray-800";
      break;
  }

  /** ===== SPORT ===== */
  if (currentPage === "sport") {
    return (
      <section className={`relative ${bgColor} text-white dark:text-gray-100`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-32 h-32 border-6 border-gray-100 dark:border-sky-950 rounded-full" />
          <div className="absolute top-5 right-40 w-24 h-24 border-6 border-gray-100 dark:border-sky-950 rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-4 border-gray-100 dark:border-sky-950  rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6">
            {t("HeroSection.sporttitle")}
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Trophy size={20} />
              <span className="text-xs sm:text-xl md:text-2xl"> {t("HeroSection.sporttxt1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target size={20} />
              <span className="text-xs sm:text-xl md:text-2xl"> {t("HeroSection.sporttxt2")}</span>
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
          <div className="absolute top-5 left-12 w-32 h-32 border-6 border-gray-100 dark:border-sky-950 rounded-xl rotate-6" />
          <div className="absolute bottom-12 right-46 w-24 h-24 border-4 border-gray-100 dark:border-sky-950 rounded-xl -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-gray-100 dark:border-sky-950 rounded-xl" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6 text-blue-50 dark:text-white">
            {t("HeroSection.protitle")}
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-100 dark:text-slate-200">
            <div className="flex items-center space-x-2">
              <Briefcase size={20} />
              <span className="text-xs sm:text-xl md:text-2xl">{t("HeroSection.protxt1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code size={20} />
              <span className="text-xs sm:text-xl md:text-2xl">{t("HeroSection.protxt2")}</span>
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
          <div className="absolute top-5 left-10 w-32 h-32 border-8 border-gray-100 dark:border-sky-950 rounded-xl rotate-6" />
          <div className="absolute top-8 right-60 w-24 h-24 border-6 border-gray-100 dark:border-sky-950 rounded-xl rotate-18" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-4 border-gray-100 dark:border-sky-950 rounded-xl -rotate-6" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-xl md:text-2xl mb-6">
            {t("HeroSection.blogtitle")}
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Tv size={20} />
              
              <span className="text-xs sm:text-xl md:text-2xl">{t("HeroSection.blogtxt1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mic size={20} />
              <span className="text-xs sm:text-xl md:text-2xl">{t("HeroSection.blogtxt2")}</span>
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
          <div className="absolute top-5 left-10 w-32 h-32 border-5 border-gray-100 dark:border-sky-950 rounded-full" />
          <div className="absolute top-2 right-56 w-24 h-24 border-4 border-gray-100 dark:border-sky-950 rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-16 h-16 border-3 border-gray-100 dark:border-sky-950 rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 py-6 text-center">
          <p className="text-2xl md:text-3xl mb-6">
            {t("HeroSection.contacttitle")}
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300 text-xs sm:text-lg md:text-xl">
            {t("HeroSection.contacttxt1")}
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
            // className="w-full h-full object-cover object-[80%]"
            className="w-full h-full object-cover object-[0%_25%]"
          />
          {/* Overlay adapté dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30 dark:from-black/20 dark:via-black/30 dark:to-black/40 z-10"></div>
        </div>
      </section>
    );
  }

  /** ===== Générique ===== */
  // return (
  //   <section
  //     className={`relative ${bgColor} text-white dark:text-gray-100 h-[10vh] flex items-center justify-center`}
  //   >
  //     <div className="text-center px-4">
  //       <h1 className="text-3xl font-semibold capitalize">
  //         {currentPage} Page
  //       </h1>
  //     </div>
  //   </section>
  // );
};

export default HeroSection;
