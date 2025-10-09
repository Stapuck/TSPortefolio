import { useEffect } from "react";

import ExperiencesComponent from "../components/ExperiencesComponent.tsx";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import { useTranslation } from "react-i18next";
import Skills from "../components/Skills.tsx";
import { skills } from "../medias/index-global.ts";
import Projects from "../components/Projects.tsx";
// import { Mail } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import Certifications from "../components/Certifications.tsx";

export default function Pro() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "TS - Pro";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-gray-800">
      <HeroSection currentPage={"pro"} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Intro */}
        <section className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent dark:text-white">
              {t("HeroSection.protitle")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed dark:text-slate-200">
              {t("Pro.txtintro")}
            </p>
          </div>
        </section>
        {/* Parcours & Formations */}
        <section className="bg-sky-100 dark:bg-sky-900/90 p-8 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center dark:text-slate-100">
            {t("Pro.background")}
          </h2>
          <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 "></div>
          <p className="max-w-4xl mx-auto sm:leading-relaxed flex justify-center text-gray-800 dark:text-slate-100">
            {t("Pro.backgroundtxt")}
          </p>
          <ExperiencesComponent />
        </section>

        <section className="bg-sky-100 dark:bg-sky-900/90 p-8 rounded-3xl">
          <Skills skills={skills} />
        </section>

        <section className="bg-sky-100 dark:bg-sky-900 p-8 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center dark:text-slate-100">
            {t("Pro.certifications")}
          </h2>
          <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-slate-200">
            {t("Pro.certificationstxt")}
          </p>
          <Certifications />

          {/* here component certification  */}
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="bg-sky-100 dark:bg-sky-900 p-8 rounded-3xl"
        >
          <Projects />
        </section>

        <section className="text-center py-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient derrière le card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>

            {/* Card principale */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-200 dark:bg-sky-900/90 dark:border-sky-700/50">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {t("Pro.readytocollab")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                {t("Pro.readytocollabtxt")}
              </p>

              {/* Boutons de contact */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://www.linkedin.com/in/terence-saramandif-840a331a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 dark:bg-sky-400/80 dark:border-sky-500 dark:hover:border-sky-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <LuLinkedin className="mr-2" size={20} />
                  {t("Contact.connect")}
                </a>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
             
                {t("Pro.downloadcv")}
              </p>
              {/* <div className="flex flex-col sm:flex-row justify-center gap-6"> */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
                <DownloadButton title="CV" description={t('DownloadBtn.cvdescription')} fileChoice={"CV"} />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 text-center text-gray-700 italic dark:text-slate-200">
          {t("Pro.citation")}
        </div>
      </main>
    </div>
  );
}
