import { useEffect } from "react";

import Experiences from "../components/Experiences.tsx";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import { useTranslation } from "react-i18next";
import Skills from "../components/Skills.tsx";
import { skills } from "../medias/databases/index-global";
import Projects from "../components/Projects.tsx";


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
        <section>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center">
          {t("Pro.background")}
        </h2>
        <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
    
          <Experiences />
        </section>

        {/* Skills todo : faire un component */}
        <section className="">
          <Skills skills ={skills} />
        </section>

        {/* Projects */}
        <section id="projects">
         <Projects/>
        </section>

      {/* todo : mettre le download btn dans experience sinon nan ?  */}

        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <DownloadButton title="CV" description="CV" fileChoice={"CV"} />
        </div>

        {/* Petit texte informatif ou citation */}
        <div className="mt-6 text-center text-gray-700 italic">
          {t("Pro.citation")}
        </div>
      </main>
    </div>
  );
}
