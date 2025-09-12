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

  // const initialLang = document.documentElement.lang || "fr";

  // const [accordionData, setAccordionData] = useState(
  //   initialLang === "en" ? accordionDataen : accordionDatafr
  // );

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
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="font-semibold bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow">
              Terence
            </span>{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent drop-shadow">
              SARAMANDIF
            </span>
          </h1>
          <p
            // className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4
            //   bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600
            //   bg-clip-text text-transparent drop-shadow"
            className="text-3xl sm:text-2xl md:text-3xl font-semibold mt-4 
              text-white drop-shadow"
          >
            {t("Home.videotext")}
          </p>
        </div>
      </section>

      {/* Icônes flottantes */}
      {showFloating && (
        <>
          {/* Scroll down */}
          <button
            onClick={scrollDown}
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl sm:text-5xl hover:text-gray-500 hover:scale-110 transition duration-300 z-30"
          >
            <ChevronDown size={50} />
          </button>

          {/* Info */}
          <div className="group fixed bottom-16 right-4 sm:right-8 text-white z-30">
            {/* Icône */}
            <button className="text-2xl sm:text-3xl hover:text-gray-500 transition duration-300">
              <CircleHelp size={30} />{" "}
            </button>

            <div className="hidden group-hover:flex flex-col items-center mt-2">
              <a
                target="_blank"
                href="https://www.instagram.com/romain.bruneau/"
                rel="noreferrer"
                className="underline text-slate-200 text-xs sm:text-sm whitespace-nowrap"
              >
                {t("Home.by")} R.B
              </a>
            </div>
          </div>

          {/* Volume */}
          <div className="fixed bottom-16 left-4 sm:left-8 text-white z-30">
            <button
              onClick={toggleSound}
              className="text-3xl sm:text-4xl hover:text-gray-500 transition duration-300"
            >
              {sound ? <Volume2 size={30} /> : <VolumeX size={30} />}
            </button>
          </div>
        </>
      )}

      {/* Scroll up */}
      {showScrollUp && (
        <button
          onClick={scrollUp}
          className="fixed bottom-28 right-4 sm:right-8 text-black z-30 text-4xl sm:text-5xl hover:scale-110 transition duration-300"
        >
          <CircleChevronUp size={40} />
        </button>
      )}

      {/* Contenu après la vidéo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <h1 className="text-6xl font-bold text-center">
          {t("Home.home_welcome")}
        </h1>
        <p className="text-xl font-medium text-center py-8 space-y-8">
          {t("Home.intro")}{" "}
        </p>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-5 bg-gray-700/95 rounded-2xl shadow-lg items-center">
          <Countdown />
        </section>
        <section className="py-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
            {t("Home.myprofile")}
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-5  bg-gray-700/95 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">{t("Home.profile")}</h3>

            <p className="text-base sm:text-lg text-white leading-relaxed">
            Information simple mais éfficace à mon sujet 
            </p>
            <div className="mt-4 text-right">
                <Link
                  to="/profile"
                  className="text-teal-500 hover:text-green-700 font-medium"
                >
                  {t("Home.see")}{t("Home.profile")}
                </Link>
              </div>
          </div>
        </section>
        {/* Section Pro + Sport */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
            {t("Home.pro&sport")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bloc Pro */}
            <div className="p-6 bg-gray-700/95 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600">{t("Home.pro")}</h3>
              <div className="mt-3 text-white">
                Ici c'est background professionnel, project auquel j'ai participé ou encore un échantillons de skill developper pdt mon cycle ingé 
              </div>
              <div className="mt-4 text-right">
                <Link
                  to="/pro"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  {t("Home.see")}{t("Home.pro")}
                </Link>
              </div>
            </div>

            {/* Bloc Sport */}
            <div className="p-6 bg-gray-700/95 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-600">{t("Home.sport")}</h3>
              {/* <p className="mt-3 text-gray-600"> */}
              <div className="mt-3 text-white">
              infos autour du canoë-kayak, entraînements, compétitions, budget d'une saison. 
              </div>
              <div className="mt-4 text-right">
                <Link
                  to="/sport"
                  className="text-green-500 hover:text-green-700 font-medium"
                >
                  {t("Home.see")}{t("Home.sport")}
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Blog */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
            {t("Home.blog")}
          </h2>
          <div className="p-6 bg-gray-700/95 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-600">
              {t("Home.lastarticle")}
            </h3>
            <p className="mt-3 text-white">
              Entre Article de presse, interview ou encore ma section blog, il ne manque pas de quoi lire sur cette page, cliquez pour découvrir plus ;)
            </p>
            <div className="mt-4 text-right">
              <Link
                to="/news"
                className="text-purple-500 hover:text-purple-700 font-medium"
              >
                {t("Home.see")}{t("Home.blog")}
              </Link>
            </div>
          </div>
        </section>
        {/* Section FAQ Accordion*/}
        
      </section>
    </>
  );
}

//todo : revoir responsiv entre le btn sound and le menu flottant sidebar !
//todo : revoir plus de video et systeme de bg video aléatoire
//todo : revoir le bg de la section accordion et countdown
//todo : revoir le texte intro
//todo : revoir responsive en md entre sidebar et le reste de la page
