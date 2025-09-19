// import { useEffect, useState } from "react";
// import AccordionGroup from "../components/AccordionGroup";
// import { useTranslation } from "react-i18next";
// import pp2 from "../medias/images/profile/pp2.jpg";
// import HeroSection from "../components/HeroSection";
// import { MapPin, Calendar, Globe, Code, Award, Zap, Heart } from "lucide-react";

// export default function Profile() {
//   const { t } = useTranslation();

//   useEffect(() => {
//     document.title = "TS - Profil";
//     window.scrollTo(0, 0);
//   }, []);

//   const [years, setYears] = useState<number>(0);
//   const fromDate = "2002-03-29T16:30:00";

//   useEffect(() => {
//     const targetDate = new Date(fromDate);
//     const interval = setInterval(() => {
//       const now = new Date();
//       const diff = now.getTime() - targetDate.getTime();
//       const diffInDays = diff / (1000 * 60 * 60 * 24);
//       const diffInYears = diffInDays / 365.25;
//       setYears(diffInYears);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [fromDate]);

//   return (
//     <div>
//       <HeroSection currentPage={"profile"} />
//       <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
//         <div className="relative mt-20">
//           <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20">
//             <img
//               src={pp2}
//               alt="Photo de profil"
//               className="w-50 h-50 rounded-full object-cover shadow-lg border-4 border-white"
//             />
//           </div>
//         </div>
//         <div className="mt-47  flex flex-col items-center text-center bg-white rounded-2xl w-fit px-6 py-4 mx-auto shadow-lg">
//           <h1 className="text-3xl font-bold">Terence SARAMANDIF</h1>
//           <p className="text-gray-600 mt-2">
//             Étudiant en ingénierie IT • Athlète Canoë Slalom • Entrepreneur
//           </p>
//           <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 mt-3">
//             <div className="flex items-center space-x-1">
//               <MapPin className="w-4 h-4" />
//               <span>Pau, France</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Calendar className="w-4 h-4" />
//               <span>
//                 {years.toFixed(8)} {t("Profile.years")}
//               </span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Globe className="w-4 h-4" />
//               <span>
//                 {t("Profile.french")}, {t("Profile.english")}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Stats rapides */}
//         <div className="grid sm:grid-cols-3 gap-6 text-center">
//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
//             <p className="font-bold text-2xl">8+</p>
//             <p className="text-gray-600 mt-1">Années d’expérience</p>
//           </div>
//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
//             <p className="font-bold text-2xl">🏆</p>
//             <p className="text-gray-600 mt-1">Champion Olympique</p>
//           </div>
//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
//             <p className="font-bold text-2xl">💼</p>
//             <p className="text-gray-600 mt-1">Développeur Web</p>
//           </div>
//         </div>

//         {/* Stats avec animations */}
//         {/* <div className="grid md:grid-cols-4 gap-6 mb-16">
//              {[
//                { icon: "⚡", number: "8+", label: "Années d'expérience", color: "from-yellow-400 to-orange-500" },
//                { icon: "🏆", number: "1st", label: "Champion Olympique", color: "from-yellow-500 to-yellow-600" },
//                { icon: "💻", number: "15+", label: "Projets réalisés", color: "from-blue-500 to-blue-600" },
//                { icon: "🚀", number: "3", label: "Startups lancées", color: "from-purple-500 to-pink-500" }
//              ].map((stat, index) => (
//                <div key={index} className="group relative overflow-hidden">
//                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                       style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
//                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                    <div className="text-center">
//                      <div className="text-3xl mb-3">{stat.icon}</div>
//                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                        {stat.number}
//                      </div>
//                      <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
//                    </div>
//                  </div>
//                </div>
//              ))}
//            </div> */}

//         {/* Sections principales avec design cards */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-16">
//           {/* Parcours académique */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-blue-100 rounded-xl mr-4">
//                 <Code className="w-6 h-6 text-blue-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Parcours Tech
//               </h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Étudiant en ingénierie informatique, passionné par le
//               développement web et l'IA. Spécialisé en React, Node.js et
//               technologies cloud.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {["React", "TypeScript", "Node.js", "Python", "AWS"].map(
//                 (tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
//                   >
//                     {tech}
//                   </span>
//                 )
//               )}
//             </div>
//           </div>
//           {/* Carrière sportive */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-green-100 rounded-xl mr-4">
//                 <Award className="w-6 h-6 text-green-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Carrière Sportive
//               </h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Athlète en canoë slalom depuis plus de 10 ans. Titres régionaux et
//               participations nationales. Le sport m'a forgé discipline et
//               résilience.
//             </p>
//             <div className="flex items-center space-x-4 text-sm text-gray-600">
//               <span className="flex items-center">🏅 5 titres régionaux</span>
//               <span className="flex items-center">⏱️ 10+ ans d'expérience</span>
//             </div>
//           </div>
//           {/* Entrepreneuriat */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-purple-100 rounded-xl mr-4">
//                 <Zap className="w-6 h-6 text-purple-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Entrepreneuriat
//               </h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Développement de projets innovants mêlant tech et sport. Objectif
//               : révolutionner l'entraînement sportif par la technologie.
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//               <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
//             </div>
//             <p className="text-sm text-gray-600">Progression du projet : 75%</p>
//           </div>
//           {/* Passions */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-pink-100 rounded-xl mr-4">
//                 <Heart className="w-6 h-6 text-pink-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Autres Passions
//               </h2>
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//               {[
//                 { icon: "👨‍👩‍👧‍👦", text: "Famille" },
//                 { icon: "🎵", text: "Musique" },
//                 { icon: "🎮", text: "Jeux vidéo" },
//                 { icon: "🖼️", text: "Art" },
//               ].map((passion, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl"
//                 >
//                   <span className="text-xl">{passion.icon}</span>
//                   <span className="text-gray-700 font-medium">
//                     {passion.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* FAQ */}
//         <AccordionGroup />

//         {/* Citation finale */}
//         <div className="text-center text-gray-600 italic mt-6 dark:text-slate-200">
//           {t('Profile.citation')}
//         </div>
//       </main>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import AccordionGroup from "../components/AccordionGroup";
import { useTranslation } from "react-i18next";
import pp2 from "../medias/images/profile/pp2.jpg";
import HeroSection from "../components/HeroSection";
import { MapPin, Calendar, Globe, Code, Award, Zap, Heart } from "lucide-react";

export default function Profile() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "TS - Profil";
    window.scrollTo(0, 0);
  }, []);

  const [years, setYears] = useState<number>(0);
  const fromDate = "2002-03-29T16:30:00";

  useEffect(() => {
    const targetDate = new Date(fromDate);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - targetDate.getTime();
      const diffInDays = diff / (1000 * 60 * 60 * 24);
      const diffInYears = diffInDays / 365.25;
      setYears(diffInYears);
    }, 1000);
    return () => clearInterval(interval);
  }, [fromDate]);

  return (
    <div>
      <HeroSection currentPage={"profile"} />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Photo + Infos en 2 colonnes */}
        {/* <div className="mt-20 flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <div className="flex-shrink-0">
            <img
              src={pp2}
              alt="Photo de profil"
              className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-100"
            />
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left bg-white dark:bg-sky-900/80 rounded-2xl px-6 py-6 shadow-lg">
            <h1 className="text-3xl font-bold dark:text-slate-100">
              Terence SARAMANDIF
            </h1>
            <p className="text-gray-600 dark:text-slate-200 mt-2">
              Étudiant en ingénierie IT • Athlète Canoë Slalom • Entrepreneur
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 text-sm text-gray-500 dark:text-slate-300 mt-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Pau, France</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {years.toFixed(8)} {t("Profile.years")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>
                  {t("Profile.french")}, {t("Profile.english")}
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="relative mt-20">
           <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20">
             <img
               src={pp2}
               alt="Photo de profil"
               className="w-50 h-50 rounded-full object-cover shadow-lg border-4 border-slate-400 dark:border-sky-600/80"
             />
           </div>
         </div>
         <div className="mt-47  flex flex-col items-center text-center bg-white dark:bg-sky-900/80 rounded-2xl w-fit px-6 py-4 mx-auto shadow-lg">
           <h1 className="text-3xl font-bold dark:text-white">Terence SARAMANDIF</h1>
           <p className="text-gray-600 dark:text-slate-200 mt-2">
             Étudiant en ingénierie IT • Athlète Canoë Slalom • Entrepreneur
           </p>
           <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 mt-3">
             <div className="flex items-center space-x-1 dark:text-slate-100">
               <MapPin className="w-4 h-4" />
               <span>Pau, France</span>
             </div>
             <div className="flex items-center space-x-1 dark:text-slate-100">
               <Calendar className="w-4 h-4" />
               <span>
                 {years.toFixed(8)} {t("Profile.years")}
               </span>
             </div>
             <div className="flex items-center space-x-1 dark:text-slate-100">
               <Globe className="w-4 h-4" />
               <span>
                 {t("Profile.french")}, {t("Profile.english")}
               </span>
             </div>
           </div>
         </div>

        {/* Stats rapides */}
        <div className="grid sm:grid-cols-3 gap-6 text-center"> 
          {[
            { num: "8+", label: "Années d’expérience" },
            { num: "🏆", label: "Champion Olympique" },
            { num: "💼", label: "Développeur Web" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-sky-900/80 shadow-md dark:shadow-slate-800/70 rounded-2xl p-6 hover:shadow-xl transition"
            >
              <p className="font-bold text-2xl dark:text-white">{item.num}</p>
              <p className="text-gray-600 dark:text-slate-200 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Sections principales */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Parcours Tech */}
          <div className="bg-white dark:bg-sky-900/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                Parcours Tech
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              Étudiant en ingénierie informatique, passionné par le
              développement web et l'IA. Spécialisé en React, Node.js et
              technologies cloud.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Carrière sportive */}
          <div className="bg-white dark:bg-sky-900/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl mr-4">
                <Award className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                Carrière Sportive
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              Athlète en canoë slalom depuis plus de 10 ans. Titres régionaux et
              participations nationales. Le sport m'a forgé discipline et
              résilience.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-slate-300">
              <span className="flex items-center">🏅 5 titres régionaux</span>
              <span className="flex items-center">⏱️ 10+ ans d'expérience</span>
            </div>
          </div>

          {/* Entrepreneuriat */}
          <div className="bg-white dark:bg-sky-900/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl mr-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                Entrepreneuriat
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              Développement de projets innovants mêlant tech et sport. Objectif
              : révolutionner l'entraînement sportif par la technologie.
            </p>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
              <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-slate-300">
              Progression du projet : 75%
            </p>
          </div>

          {/* Passions */}
          <div className="bg-white dark:bg-sky-900/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-xl mr-4">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                Autres Passions
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "👨‍👩‍👧‍👦", text: "Famille" },
                { icon: "🎵", text: "Musique" },
                { icon: "🎮", text: "Jeux vidéo" },
                { icon: "🖼️", text: "Art" },
              ].map((passion, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-slate-800  rounded-xl"
                  // className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-xl"
                >
                  <span className="text-xl">{passion.icon}</span>
                  <span className="text-gray-700 dark:text-slate-200 font-medium">
                    {passion.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AccordionGroup />

        <div className="text-center text-gray-600 italic mt-6 dark:text-slate-200">
          {t("Profile.citation")}
        </div>
      </main>
    </div>
  );
}
