import { useEffect } from "react";

import Experiences from "../components/Experiences.tsx";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import { skills } from "../medias/databases/index-global";
import { useTranslation } from "react-i18next";

export default function Pro() {
  const {t} = useTranslation();

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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('Pro.background')}
          </h2>
          <Experiences />
        </section>

        {/* Skills todo : faire un component */}
        <section className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('Pro.skills')}</h2>

          <div>text en despi : </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada, nunc at varius lacinia, sem lectus viverra nisi, ac
            aliquet est nulla a lorem. Phasellus vel diam nec velit pretium
            tincidunt. Sed ultricies libero a mi laoreet, vel interdum elit
            iaculis. Curabitur rutrum, nisl in hendrerit posuere, est orci
            feugiat felis, sit amet dictum nisl lectus a risus. Pellentesque
            elementum posuere fermentum. In hac habitasse platea dictumst. Sed
            maximus tortor ac purus viverra, at pharetra odio feugiat.
          </p>


          <div className="mt-16 flex flex-wrap gap-12 mb-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" group block-container w-20 h-20 relative flex justify-center"
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <div className="hidden text-black dark:text-slate-500 font-semibold text-sm absolute mt-24 bg-slate-400/85 px-3 rounded-2xl group-hover:block dark:bg-slate-300">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('Pro.project')}</h2>

          {/* todo :  faire un json
            
                todo : faire composant 
              title
              subject
              domaine ( pro ou perso)
              image ou logo 
              texte ? dans quelle but et compétences 
              lien ( github )
            */}

      

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-40 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl mb-2">🧑‍🎓</span>
              <p className="font-semibold mb-2">CV</p>
              <DownloadButton fileChoice={"CV"} />
            </div>
          </div>

          {/* Petit texte informatif ou citation */}
          <div className="mt-6 text-center text-gray-700 italic">
            {t('Pro.citation')}
          </div>
        </section>
      </main>
    </div>
  );
}
