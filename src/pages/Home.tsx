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

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const y = window.scrollY;
      setShowFloating(y < 100);
      setShowScrollUp(y > 1000);
    };

    document.title = "TS - Home";

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
        {/* <video
          src="/videos/20240203_Reunion.mp4" // <- chemin public
          autoPlay
          loop
          muted={!sound}
          playsInline
          preload="auto"
        /> */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 dark:from-black/40 dark:via-black/60 dark:to-black/80 z-10"></div>

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
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-white/95 drop-shadow-lg max-w-4xl mx-auto">
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
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 text-white dark:text-slate-100 z-30 animate-bounce hover:animate-none"
          >
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:bg-slate-100/10 dark:border-slate-100/20 dark:hover:bg-slate-100/20 transition-all duration-300 hover:scale-110">
              <ChevronDown size={20} />
            </div>
          </button>

          {/* Info  */}
          <div className="group fixed bottom-16 right-4 sm:right-8 z-30">
            <div className="group-hover:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:bg-slate-100/10 dark:border-slate-100/20 dark:hover:bg-slate-100/20 transition-all duration-300">
              <button className="flex items-center justify-center w-8 h-8 text-white dark:text-slate-100 transition-transform duration-300 hover:scale-110">
                <CircleHelp size={24} />
              </button>
            </div>

            <div className="hidden group-hover:flex flex-col items-center mt-3 animate-fade-in">
              <div className="px-3 py-2 bg-black/80 dark:bg-sky-950/90 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-100/20">
                <a
                  target="_blank"
                  href="https://www.instagram.com/romain.bruneau/"
                  rel="noreferrer"
                  className="text-white/90 dark:text-slate-100 text-sm whitespace-nowrap hover:text-white transition-colors duration-300"
                >
                  {t("Home.by")} R.B
                </a>
              </div>
            </div>
          </div>

          {/* Volume */}
          <div className="fixed bottom-16 left-4 sm:left-8 text-white dark:text-slate-100 z-30">
            <button
              onClick={toggleSound}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:bg-slate-100/10 dark:border-slate-100/20 dark:hover:bg-slate-100/20 transition-all duration-300 hover:scale-110"
            >
              {sound ? <Volume2 size={20} /> : <VolumeX size={20} />}
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
          <div className="p-3 rounded-full bg-gray-800/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-700 dark:border-slate-700 hover:bg-gray-800 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 text-white dark:text-slate-100">
            <CircleChevronUp size={28} />
          </div>
        </button>
      )}

      {/* Contenu après la vidéo */}
      {/* <main className="max-w-6xl mx-auto px-6 py-12 space-y-20 min-h-screen bg-white dark:bg-sky-950 text-gray-900 dark:text-slate-100"> */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20 min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-300 dark:to-slate-100">
              {t("Home.home_welcome")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-200 max-w-4xl mx-auto leading-relaxed">
              {t("Home.intro")}
            </p>
          </div>

          {/* Countdown Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50">
              <Countdown />
            </div>
          </section>

          {/* Profile Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 dark:text-slate-100">
                {t("Home.myprofile")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-700 dark:to-cyan-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50 hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-teal-600 mb-6 flex items-center dark:text-teal-300">
                  <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-4 "></div>
                  {t("Home.profile")}
                </h3>
                <p className="text-gray-700 dark:text-slate-200 text-lg leading-relaxed mb-6">
                  {t("Home.profiletxt")}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 dark:text-slate-100">
                {t("Home.pro&sport")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bloc Pro */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50 hover:shadow-3xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                    {t("Home.pro")}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-200 text-base leading-relaxed mb-6 flex-grow">
                    {t("Home.protxt")}
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800 rounded-3xl transform rotate-2 group-hover:rotate-3  transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50 hover:shadow-3xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4 "></div>
                    {t("Home.sport")}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-200 text-base leading-relaxed mb-6 flex-grow">
                    {t("Home.sporttxt")}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 dark:text-slate-100">
                {t("Home.blog")}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50 hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
                  {t("Home.lastarticle")}
                </h3>
                <p className="text-gray-700 dark:text-slate-200 text-lg leading-relaxed mb-6">
                  {t("Home.blogtxt")}
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
      </main>

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
