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
        {/* <div className="relative mt-20">
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20">
            <img
              src={pp2}
              alt="Photo de profil"
              className="w-50 h-50 rounded-full object-cover shadow-lg border-4 border-slate-400 dark:border-sky-600/80"
            />
          </div>
        </div>
        <div className="mt-47  flex flex-col items-center text-center bg-white dark:bg-sky-900/80 rounded-2xl w-fit px-6 py-4 mx-auto shadow-lg">
          <h1 className="text-3xl font-bold dark:text-white">
            Terence SARAMANDIF
          </h1>
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
        </div> */}

        <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-10 mt-20">
          <div className="flex-shrink-0 Z-10">
            <img
              src={pp2}
              alt="Photo de profil"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-sky-400 dark:border-gray-900/60 "
            />
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-center text-center bg-white dark:bg-gray-900/60 rounded-2xl px-8 py-6 shadow-md shadow-black/30 dark:shadow-sky-600/80 ">
            <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-800">
              Terence SARAMANDIF
            </h1>
            <p className="dark:text-gray-300 text-gray-700 mt-2">
              {t("Profile.txtintro")}
            </p>

            <div className="flex justify-center items-center space-x-6 text-sm text-gray-800 dark:text-gray-400 mt-3">
              <div className="flex items-center space-x-1 text-gray-800 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Pau, France</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-800 dark:text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>
                  &{years.toFixed(8)} {t("Profile.years")}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-gray-800 dark:text-gray-300">
                <Globe className="w-4 h-4" />
                <span>
                  {t("Profile.french")}, {t("Profile.english")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { num: "8+", label: t("Profile.statlabel1") },
            { num: "🏆", label: t("Profile.statlabel2") },
            { num: "💼", label: t("Profile.statlabel3") },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-sky-100 dark:bg-gray-900/60 shadow-md dark:shadow-sky-600/80 rounded-2xl p-6 hover:shadow-lg transition"
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
          <div className="bg-green-300 dark:bg-green-900/80 rounded-3xl p-8 shadow-md hover:shadow-lg dark:shadow-sky-700/90 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                {t("Profile.section1title")}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              {t("Profile.section1txt")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Javascript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Carrière sportive */}
          <div className="bg-blue-300 dark:bg-blue-900/80 rounded-3xl p-8 shadow-md hover:shadow-lg dark:shadow-sky-700/90 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl mr-4">
                <Award className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                {t("Profile.section2title")}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              {t("Profile.section2txt")}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-slate-300">
              <span className="flex items-center">
                ⏱️ {t("Profile.section2label2")}
              </span>
              <span className="flex items-center">
                🏅 {t("Profile.section2label1")}
              </span>
            </div>
          </div>

          {/* Entrepreneuriat */}
          <div className="bg-pink-300 dark:bg-pink-900/80 rounded-3xl p-8 shadow-md hover:shadow-lg dark:shadow-sky-700/90 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl mr-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                {t("Profile.section3title")}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
              {t("Profile.section3txt1")}
            </p>
            {/* <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-3">
              <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
            </div> */}
            <p className="text-sm text-gray-600 dark:text-slate-300 italic">
              {t("Profile.section3txt2")}
            </p>
          </div>

          {/* Passions */}
          <div className="bg-purple-300 dark:bg-purple-900/70 rounded-3xl p-8 shadow-lg hover:shadow-xl dark:shadow-sky-700/90 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-xl mr-4">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                {t("Profile.section4title")}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "👨‍👩‍👧‍👦", text: t("Profile.section4txt1") },
                { icon: "🎵", text: t("Profile.section4txt2") },
                { icon: "🏔️", text: t("Profile.section4txt3") },
                { icon: "🖼️", text: t("Profile.section4txt4") },
              ].map((passion, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-100 border-1 border-gray-200 dark:bg-sky-900/60 dark:border-sky-800 rounded-xl"
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
