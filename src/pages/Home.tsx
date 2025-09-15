// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import videoBg from "../medias/videos/20240203_Reunion.mp4";
// import { Link } from "react-router-dom";

// import {
//   Volume2,
//   VolumeX,
//   CircleHelp,
//   ChevronDown,
//   CircleChevronUp,
// } from "lucide-react";
// import Countdown from "../components/Countdown";

// export default function Home() {
//   const { t } = useTranslation();

//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [sound, setSound] = useState(false);
//   const [showFloating, setShowFloating] = useState(true);
//   const [showScrollUp, setShowScrollUp] = useState(false);

//   // const initialLang = document.documentElement.lang || "fr";

//   // const [accordionData, setAccordionData] = useState(
//   //   initialLang === "en" ? accordionDataen : accordionDatafr
//   // );

//   // Scroll et gestion icônes flottantes
//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const handleScroll = () => {
//       const y = window.scrollY;
//       setShowFloating(y < 100); // icônes en haut
//       setShowScrollUp(y > 1000); // flèche scroll up apparaît après 1200px
//     };

//     document.title = "TS - Home";

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // check initial scroll
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleSound = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = sound;
//       setSound(!sound);
//     }
//   };

//   const scrollDown = () => {
//     window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
//     setSound(false);
//   };

//   const scrollUp = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* Hero vidéo fullscreen */}
//       <section className="relative w-full h-screen sm:h-screen md:h-[100vh] lg:h-[100vh]">
//         <video
//           ref={videoRef}
//           src={videoBg}
//           autoPlay
//           loop
//           muted={!sound}
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 z-10"></div>

//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-6">
//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
//             <span className="font-semibold bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow">
//               Terence
//             </span>{" "}
//             <span className="font-semibold bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent drop-shadow">
//               SARAMANDIF
//             </span>
//           </h1>
//           <p
//             // className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4
//             //   bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600
//             //   bg-clip-text text-transparent drop-shadow"
//             className="text-3xl sm:text-2xl md:text-3xl font-semibold mt-4 
//               text-white drop-shadow"
//           >
//             {t("Home.videotext")}
//           </p>
//         </div>
//       </section>

//       {/* Icônes flottantes */}
//       {showFloating && (
//         <>
//           {/* Scroll down */}
//           <button
//             onClick={scrollDown}
//             className="fixed bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl sm:text-5xl hover:text-gray-500 hover:scale-110 transition duration-300 z-30"
//           >
//             <ChevronDown size={50} />
//           </button>

//           {/* Info */}
//           <div className="group fixed bottom-16 right-4 sm:right-8 text-white z-30">
//             {/* Icône */}
//             <button className="text-2xl sm:text-3xl hover:text-gray-500 transition duration-300">
//               <CircleHelp size={30} />{" "}
//             </button>

//             <div className="hidden group-hover:flex flex-col items-center mt-2">
//               <a
//                 target="_blank"
//                 href="https://www.instagram.com/romain.bruneau/"
//                 rel="noreferrer"
//                 className="underline text-slate-200 text-xs sm:text-sm whitespace-nowrap"
//               >
//                 {t("Home.by")} R.B
//               </a>
//             </div>
//           </div>

//           {/* Volume */}
//           <div className="fixed bottom-16 left-4 sm:left-8 text-white z-30">
//             <button
//               onClick={toggleSound}
//               className="text-3xl sm:text-4xl hover:text-gray-500 transition duration-300"
//             >
//               {sound ? <Volume2 size={30} /> : <VolumeX size={30} />}
//             </button>
//           </div>
//         </>
//       )}

//       {/* Scroll up */}
//       {showScrollUp && (
//         <button
//           onClick={scrollUp}
//           className="fixed bottom-28 right-4 sm:right-8 text-black z-30 text-4xl sm:text-5xl hover:scale-110 transition duration-300"
//         >
//           <CircleChevronUp size={40} />
//         </button>
//       )}

//       {/* Contenu après la vidéo */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
//         <h1 className="text-6xl font-bold text-center">
//           {t("Home.home_welcome")}
//         </h1>
//         <p className="text-xl font-medium text-center py-8 space-y-8">
//           {t("Home.intro")}{" "}
//         </p>
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-5 bg-gray-700/95 rounded-2xl shadow-lg items-center">
//           <Countdown />
//         </section>
//         <section className="py-4">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
//             {t("Home.myprofile")}
//           </h2>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-5  bg-gray-700/95 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-teal-600 mb-4">{t("Home.profile")}</h3>

//             <p className="text-base sm:text-lg text-white leading-relaxed">
//             Information simple mais éfficace à mon sujet 
//             </p>
//             <div className="mt-4 text-right">
//                 <Link
//                   to="/profile"
//                   className="text-teal-500 hover:text-green-700 font-medium"
//                 >
//                   {t("Home.see")}{t("Home.profile")}
//                 </Link>
//               </div>
//           </div>
//         </section>
//         {/* Section Pro + Sport */}
//         <section>
//           <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
//             {t("Home.pro&sport")}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Bloc Pro */}
//             <div className="p-6 bg-gray-700/95 rounded-xl shadow">
//               <h3 className="text-xl font-semibold text-blue-600">{t("Home.pro")}</h3>
//               <div className="mt-3 text-white">
//                 Ici c'est background professionnel, project auquel j'ai participé ou encore un échantillons de skill developper pdt mon cycle ingé 
//               </div>
//               <div className="mt-4 text-right">
//                 <Link
//                   to="/pro"
//                   className="text-blue-500 hover:text-blue-700 font-medium"
//                 >
//                   {t("Home.see")}{t("Home.pro")}
//                 </Link>
//               </div>
//             </div>

//             {/* Bloc Sport */}
//             <div className="p-6 bg-gray-700/95 rounded-xl shadow">
//               <h3 className="text-xl font-semibold text-green-600">{t("Home.sport")}</h3>
//               {/* <p className="mt-3 text-gray-600"> */}
//               <div className="mt-3 text-white">
//               infos autour du canoë-kayak, entraînements, compétitions, budget d'une saison. 
//               </div>
//               <div className="mt-4 text-right">
//                 <Link
//                   to="/sport"
//                   className="text-green-500 hover:text-green-700 font-medium"
//                 >
//                   {t("Home.see")}{t("Home.sport")}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Section Blog */}
//         <section>
//           <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
//             {t("Home.blog")}
//           </h2>
//           <div className="p-6 bg-gray-700/95 rounded-xl shadow">
//             <h3 className="text-xl font-semibold text-purple-600">
//               {t("Home.lastarticle")}
//             </h3>
//             <p className="mt-3 text-white">
//               Entre Article de presse, interview ou encore ma section blog, il ne manque pas de quoi lire sur cette page, cliquez pour découvrir plus ;)
//             </p>
//             <div className="mt-4 text-right">
//               <Link
//                 to="/news"
//                 className="text-purple-500 hover:text-purple-700 font-medium"
//               >
//                 {t("Home.see")}{t("Home.blog")}
//               </Link>
//             </div>
//           </div>
//         </section>
//         {/* Section FAQ Accordion*/}
        
//       </section>
//     </>
//   );
// }

// //todo : revoir responsiv entre le btn sound and le menu flottant sidebar !
// //todo : revoir plus de video et systeme de bg video aléatoire
// //todo : revoir le bg de la section accordion et countdown
// //todo : revoir le texte intro
// //todo : revoir responsive en md entre sidebar et le reste de la page


import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import videoBg from "../medias/videos/20240203_Reunion.mp4";
import { Link } from "react-router-dom";

import {
  Volume2,
  VolumeX,
  CircleHelp,
  ChevronDown,
  CircleChevronUp,
} from "lucide-react";
import Countdown from "../components/Countdown";

export default function Home() {
  const { t } = useTranslation();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);
  const [showFloating, setShowFloating] = useState(true);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Scroll et gestion icônes flottantes
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const y = window.scrollY;
      setShowFloating(y < 100); // icônes en haut
      setShowScrollUp(y > 1000); // flèche scroll up apparaît après 1200px
    };

    document.title = "TS - Home";

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial scroll
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = sound;
      setSound(!sound);
    }
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    setSound(false);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero vidéo fullscreen */}
      <section className="relative w-full h-screen sm:h-screen md:h-[100vh] lg:h-[100vh]">
        <video
          ref={videoRef}
          src={videoBg}
          autoPlay
          loop
          muted={!sound}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-6">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                Terence
              </span>{" "}
              <span className="font-bold bg-gradient-to-r from-blue-500 via-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
                SARAMANDIF
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-6 text-white/95 drop-shadow-lg max-w-4xl mx-auto">
              {t("Home.videotext")}
            </p>
          </div>
        </div>
      </section>

      {/* Icônes flottantes */}
      {showFloating && (
        <>
          {/* Scroll down */}
          <button
            onClick={scrollDown}
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 text-white z-30 animate-bounce hover:animate-none"
          >
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <ChevronDown size={32} />
            </div>
          </button>

          {/* Info */}
          <div className="group fixed bottom-16 right-4 sm:right-8 text-white z-30">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <button className="hover:scale-110 transition-transform duration-300">
                <CircleHelp size={24} />
              </button>
            </div>
            <div className="hidden group-hover:flex flex-col items-center mt-3 animate-fade-in">
              <div className="px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20">
                <a
                  target="_blank"
                  href="https://www.instagram.com/romain.bruneau/"
                  rel="noreferrer"
                  className="text-white/90 text-sm whitespace-nowrap hover:text-white transition-colors duration-300"
                >
                  {t("Home.by")} R.B
                </a>
              </div>
            </div>
          </div>

          {/* Volume */}
          <div className="fixed bottom-16 left-4 sm:left-8 text-white z-30">
            <button
              onClick={toggleSound}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              {sound ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
          </div>
        </>
      )}

      {/* Scroll up */}
      {showScrollUp && (
        <button
          onClick={scrollUp}
          className="fixed bottom-28 right-4 sm:right-8 z-30 animate-fade-in"
        >
          <div className="p-3 rounded-full bg-gray-900/80 backdrop-blur-md border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110 text-white">
            <CircleChevronUp size={28} />
          </div>
        </button>
      )}

      {/* Contenu après la vidéo */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          {/* Welcome Section */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
              {t("Home.home_welcome")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("Home.intro")}
            </p>
          </div>

          {/* Countdown Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <Countdown />
            </div>
          </section>

          {/* Profile Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t("Home.myprofile")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-teal-700 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-4"></div>
                  {t("Home.profile")}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Information simple mais éfficace à mon sujet 
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/profile"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t("Home.see")} {t("Home.profile")}
                    <ChevronDown className="ml-2 rotate-[-90deg]" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section Pro + Sport */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t("Home.pro&sport")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bloc Pro */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                    {t("Home.pro")}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                    Ici c'est background professionnel, project auquel j'ai participé ou encore un échantillons de skill developper pdt mon cycle ingé 
                  </p>
                  <div className="flex justify-end">
                    <Link
                      to="/pro"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t("Home.see")} {t("Home.pro")}
                      <ChevronDown className="ml-2 rotate-[-90deg]" size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bloc Sport */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
                    {t("Home.sport")}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                    infos autour du canoë-kayak, entraînements, compétitions, budget d'une saison. 
                  </p>
                  <div className="flex justify-end">
                    <Link
                      to="/sport"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t("Home.see")} {t("Home.sport")}
                      <ChevronDown className="ml-2 rotate-[-90deg]" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Section Blog */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {t("Home.blog")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
                  {t("Home.lastarticle")}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Entre Article de presse, interview ou encore ma section blog, il ne manque pas de quoi lire sur cette page, cliquez pour découvrir plus ;)
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/news"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t("Home.see")} {t("Home.blog")}
                    <ChevronDown className="ml-2 rotate-[-90deg]" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}

