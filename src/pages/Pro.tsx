import { useEffect } from "react";

import Experiences from "../components/Experiences.tsx";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import { useTranslation } from "react-i18next";
import Skills from "../components/Skills.tsx";
import { skills } from "../medias/databases/index-global";
import Projects from "../components/Projects.tsx";
// import { Mail } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";

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
        {/* Parcours & Formations */}
        <section className="bg-sky-200 dark:bg-sky-900/90 p-8 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center dark:text-slate-100">
            {t("Pro.background")}
          </h2>
          <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <Experiences />
        </section>

        <section className="bg-sky-200 dark:bg-sky-900/90 p-8 rounded-3xl">
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

          {/* todo : voir pour faire un composant  */}
        {/* mettre certif green dev et nasa, cisco, ??? en passé d'autre ,  */}
        </section>

        {/* Projects */}
        <section id="projects" className="bg-sky-100 dark:bg-sky-900 p-8 rounded-3xl">
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
                {/* <a
                  href="mailto:terence.saramandif@email.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  {t("Contact.sendemail")}
                </a> */}
                <a
                  href="https://linkedin.com/in/terence-saramandif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 dark:bg-sky-400/80 dark:border-sky-500 dark:hover:border-sky-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <LuLinkedin className="mr-2" size={20} />
                  {t("Contact.connect")}
                </a>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                {" "}
                {t("Pro.downloadcv")}{" "}
              </p>
              {/* Bouton de téléchargement du CV */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <DownloadButton title="CV" description="CV" fileChoice={"CV"} />
              </div>
            </div>
          </div>
        </section>

        {/* todo : mettre le download btn dans experience sinon nan ?  */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-6">
            <DownloadButton title="CV" description="CV" fileChoice={"CV"} />
        </div> */}

        {/* Petit texte informatif ou citation */}
        <div className="mt-6 text-center text-gray-700 italic dark:text-slate-200">
          {t("Pro.citation")}
        </div>
      </main>
    </div>
  );
}
