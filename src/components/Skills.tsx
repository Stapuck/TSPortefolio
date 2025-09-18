import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type Skills } from "../medias/databases/index-global";

// todo : useCountup

export interface SkillsProps {
  skills: any[];
}

export default function Skills({ skills }: SkillsProps) {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const groupedSkills = skills.reduce((acc: any, skill: Skills) => {
    const category = skill.category || "Général";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-slate-100">
          {t("Pro.skills")}
        </h2>
        <div className="w-15 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed dark:text-slate-200">
          {t("Pro.skillstxt")}
        </p>
      </div>
      {/* todo : revoir le bg  */}
      <div
        className="my-8 p-4 rounded-xl 
                bg-blue-50 border border-blue-200 
                dark:bg-blue-800 dark:border-blue-800"
      >
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 bg-blue-600 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div className="text-sm text-blue-800 dark:text-blue-100">
            <p className="font-medium mb-1">{t("Skills.noteTitle")}</p>
            <p className="text-blue-700 dark:text-blue-200">
              {t("Skills.noteText")}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="mb-12">
            {Object.keys(groupedSkills).length > 1 && (
              <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 "></span>
                {category}
              </h3>
            )}

            <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
              {(categorySkills as Skills[]).map(
                (skill: Skills, index: number) => (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="relative">
                      {/* Card principal */}
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white dark:bg-sky-800 dark:border-gray-500 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-200">
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Tooltip */}
                      <div
                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                          hoveredSkill === `${category}-${index}`
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2"
                        }`}
                      >
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                          {skill.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>

                      {/* Badge niveau si disponible */}
                      {skill.level && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {skill.level}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Nom en dessous pour mobile */}
                    <p className="md:hidden text-center text-xs font-medium text-gray-700 mt-2">
                      {skill.name}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="mb-8">
            {Object.keys(groupedSkills).length > 1 && (
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {category}
              </h3>
            )}

            <div className="grid grid-cols-4 gap-4">
              {(categorySkills as Skills[]).map(
                (skill: Skills, index: number) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center mb-2 mx-auto">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-tight">
                      {skill.name}
                    </p>
                    {skill.level && (
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mt-1 mx-auto">
                        <span className="text-white text-xs font-bold">
                          {skill.level}
                        </span>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Statistiques optionnelles */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-sky-700 dark:via-sky-800 dark:to-sky-700 rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-slate-300 mb-2">
              {skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-slate-300 mb-2">
              {Object.keys(groupedSkills).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Catégories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-slate-300 mb-2">
              3+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Années exp.</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-slate-300 mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projets</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default Skills;
