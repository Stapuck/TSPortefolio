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


  // todo : refaire les couleurs light and dark
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
            {t("HeroSection.sporttitle")}
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Trophy size={20} />
              <span> {t("HeroSection.sporttxt1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target size={20} />
              <span> {t("HeroSection.sporttxt2")}</span>
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
            {t('HeroSection.protitle')}
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200 dark:text-blue-300">
            <div className="flex items-center space-x-2">
              <Briefcase size={20} />
              <span>{t('HeroSection.protxt1')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code size={20} />
              <span>{t('HeroSection.protxt2')}</span>
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
            {t('HeroSection.blogtitle')}
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Tv size={20} />
              <span>{t('HeroSection.blogtxt1')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mic size={20} />
              <span>{t('HeroSection.blogtxt2')}</span>
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
          <p className="text-2xl md:text-2xl mb-6">{t('HeroSection.contacttitle')}</p>
          <div className="flex justify-center items-center space-x-6 text-gray-200 dark:text-gray-300">
             {t('HeroSection.contacttxt1')}
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


// import React from "react";
// import { Trophy, Target, Briefcase, Code, Tv, Mic, Mail, MessageCircle, User } from "lucide-react";
// import baniere from "../medias/images/profile/terence-11.jpg";
// import { useTranslation } from "react-i18next";

// type HeroSectionProps = {
//   currentPage: "sport" | "pro" | "contact" | "profile" | "blog";
// };

// export const HeroSection: React.FC<HeroSectionProps> = ({ currentPage }) => {
//   const { t } = useTranslation();

//   /** ===== SPORT ===== */
//   if (currentPage === "sport") {
//     return (
//       <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white">
//         {/* Effet de particules flottantes */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//         </div>

//         {/* Éléments décoratifs géométriques */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-8 left-10 w-32 h-32 border-4 border-white/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
//           <div className="absolute top-20 right-20 w-24 h-24 border-3 border-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
//           <div className="absolute bottom-10 left-1/3 w-16 h-16 border-2 border-white/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
//         </div>

//         <div className="relative container mx-auto px-6 py-12">
//           <div className="text-center space-y-8">
//             {/* Titre principal */}
//             <div className="space-y-4">
//               <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
//                 {t("HeroSection.sporttitle")}
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
//             </div>

//             {/* Icônes et descriptions */}
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500">
//                     <Trophy size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t("HeroSection.sporttxt1")}
//                   </span>
//                 </div>
//               </div>

//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-green-400 to-green-500">
//                     <Target size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t("HeroSection.sporttxt2")}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /** ===== PRO ===== */
//   if (currentPage === "pro") {
//     return (
//       <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 text-white">
//         {/* Effet de particules flottantes */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-4 -left-4 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//         </div>

//         {/* Éléments décoratifs géométriques */}
//         <div className="absolute inset-0 opacity-15">
//           <div className="absolute top-8 left-12 w-32 h-32 border-4 border-white/40 rounded-xl rotate-12 animate-float" style={{ animationDelay: '0s' }} />
//           <div className="absolute bottom-12 right-16 w-24 h-24 border-3 border-white/50 rounded-xl -rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
//           <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white/60 rounded-xl rotate-45 animate-float" style={{ animationDelay: '3s' }} />
//         </div>

//         <div className="relative container mx-auto px-6 py-12">
//           <div className="text-center space-y-8">
//             {/* Titre principal */}
//             <div className="space-y-4">
//               <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
//                 {t('HeroSection.protitle')}
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
//             </div>

//             {/* Icônes et descriptions */}
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-500">
//                     <Briefcase size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t('HeroSection.protxt1')}
//                   </span>
//                 </div>
//               </div>

//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-500">
//                     <Code size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t('HeroSection.protxt2')}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /** ===== BLOG ===== */
//   if (currentPage === "blog") {
//     return (
//       <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-slate-900 text-white">
//         {/* Effet de particules flottantes */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>

//         {/* Éléments décoratifs géométriques */}
//         <div className="absolute inset-0 opacity-12">
//           <div className="absolute top-8 left-10 w-32 h-32 border-4 border-white/40 rounded-xl rotate-12 animate-float" style={{ animationDelay: '0s' }} />
//           <div className="absolute top-20 right-20 w-24 h-24 border-3 border-white/50 rounded-xl -rotate-6 animate-float" style={{ animationDelay: '2s' }} />
//           <div className="absolute bottom-10 left-1/3 w-16 h-16 border-2 border-white/60 rounded-xl rotate-45 animate-float" style={{ animationDelay: '1s' }} />
//         </div>

//         <div className="relative container mx-auto px-6 py-12">
//           <div className="text-center space-y-8">
//             {/* Titre principal */}
//             <div className="space-y-4">
//               <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
//                 {t('HeroSection.blogtitle')}
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//             </div>

//             {/* Icônes et descriptions */}
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-red-400 to-red-500">
//                     <Tv size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t('HeroSection.blogtxt1')}
//                   </span>
//                 </div>
//               </div>

//               <div className="group relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform -rotate-1 group-hover:-rotate-3 transition-transform duration-300"></div>
//                 <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-500">
//                     <Mic size={24} className="text-white" />
//                   </div>
//                   <span className="text-white/90 font-medium text-lg">
//                     {t('HeroSection.blogtxt2')}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /** ===== CONTACT ===== */
//   if (currentPage === "contact") {
//     return (
//       <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-700 to-slate-900 text-white">
//         {/* Effet de particules flottantes */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-red-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
//         </div>

//         {/* Éléments décoratifs géométriques */}
//         <div className="absolute inset-0 opacity-12">
//           <div className="absolute top-8 left-10 w-32 h-32 border-4 border-white/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
//           <div className="absolute top-20 right-20 w-24 h-24 border-3 border-white/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
//           <div className="absolute bottom-10 left-1/3 w-16 h-16 border-2 border-white/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
//         </div>

//         <div className="relative container mx-auto px-6 py-12">
//           <div className="text-center space-y-8">
//             {/* Titre principal */}
//             <div className="space-y-4">
//               <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
//                 {t('HeroSection.contacttitle')}
//               </h1>
//               <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
//             </div>

//             {/* Description */}
//             <div className="relative max-w-2xl mx-auto">
//               <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl transform rotate-1"></div>
//               <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6">
//                 <div className="flex items-center justify-center space-x-3 mb-4">
//                   <div className="p-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-500">
//                     <Mail size={20} className="text-white" />
//                   </div>
//                   <div className="p-2 rounded-full bg-gradient-to-br from-green-400 to-green-500">
//                     <MessageCircle size={20} className="text-white" />
//                   </div>
//                 </div>
//                 <p className="text-white/90 text-lg font-medium leading-relaxed">
//                   {t('HeroSection.contacttxt1')}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /** ===== PROFILE ===== */
//   if (currentPage === "profile") {
//     return (
//       <section className="relative overflow-hidden">
//         {/* Image de fond avec overlay */}
//         <div className="relative h-64 md:h-80">
//           <img
//             src={baniere}
//             alt="Bannière profil"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
          
//           {/* Éléments décoratifs flottants */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-8 left-8 w-24 h-24 border-3 border-white/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
//             <div className="absolute top-12 right-12 w-16 h-16 border-2 border-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
//             <div className="absolute bottom-12 left-1/3 w-20 h-20 border-2 border-white/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
//           </div>

//           {/* Contenu superposé */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center space-y-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full transform rotate-3"></div>
//                 <div className="relative w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
//                   <User size={40} className="text-white" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-2xl">
//                   Profil Personnel
//                 </h1>
//                 <div className="h-1 w-16 bg-gradient-to-r from-white/60 to-white/80 mx-auto rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Fallback générique (ne devrait pas être utilisé avec le nouveau design)
//   return null;
// };

// export default HeroSection;
