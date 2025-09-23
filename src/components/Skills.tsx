import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type Skills } from "../medias/databases/index-global";

export interface SkillsProps {
  skills: any[];
}

export default function Skills({ skills }: SkillsProps) {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [groupByCategory, setGroupByCategory] = useState(false);
  // const initialLang = document.documentElement.lang || "fr";
  // todo : revoir pour afficher la category ou catgory_fr en fonction de la langue choisis 
                  // {initialLang === "fr" ? category_fr : category}



  const groupedSkills = skills.reduce((acc: any, skill: Skills) => {
    const category = skill.category || "Général";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Fonction pour déterminer si les catégories peuvent être en ligne
  const canCategoriesBeInline = () => {
    const categories = Object.keys(groupedSkills);
    if (categories.length <= 1) return false;

    // Vérifie si toutes les catégories ont peu d'éléments (≤ 6 sur desktop, ≤ 4 sur mobile)
    return categories.every((category) => groupedSkills[category].length <= 6);
  };

  const shouldDisplayInline = groupByCategory && canCategoriesBeInline();

  const renderSkillCard = (
  skill: Skills,
  index: number,
  categoryKey: string = ""
) => (
  <div
    key={`${categoryKey}-${index}`}
    className="group relative"
    onMouseEnter={() => setHoveredSkill(`${categoryKey}-${index}`)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
    <div className="relative">
      {/* Card principal */}
      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white dark:bg-sky-800/50 dark:border-gray-500 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:border-blue-200 relative">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-8 h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Badge niveau si disponible */}
        {skill.level && (
          <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs lg:text-sm font-bold">{skill.level}</span>
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-10 ${
          hoveredSkill === `${categoryKey}-${index}`
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
          {skill.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>

    {/* Nom en dessous pour mobile */}
    <p className="md:hidden text-center text-xs font-medium text-gray-700 dark:text-gray-300 mt-2">
      {skill.name}
    </p>
  </div>
);


  const renderMobileSkillCard = (
  skill: Skills,
  index: number,
  categoryKey: string = ""
) => (
  <div key={`${categoryKey}-${index}`} className="relative text-center">
    <div className="w-14 h-14 bg-white dark:bg-sky-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 flex items-center justify-center mx-auto relative">
      <img
        src={skill.imageUrl}
        alt={skill.name}
        className="w-7 h-7 object-contain"
      />

      {/* Badge niveau si disponible */}
      {skill.level && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">{skill.level}</span>
        </div>
      )}
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-2 leading-tight">
      {skill.name}
    </p>
  </div>
);

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-slate-100">
          {t("Pro.skills")}
        </h2>
        <div className="w-15 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-slate-200">
          {t("Pro.skillstxt")}
        </p>
      </div>

      <div
        className="mt-8 p-4 
            bg-blue-50 dark:bg-sky-700/50 
            border border-blue-200 dark:border-slate-700 
            rounded-xl transition-colors duration-300 shadow-lg"
      >
        <div className="flex items-start space-x-3">
          {/* Icône circulaire */}
          <div
            className="w-5 h-5 bg-blue-600 dark:bg-blue-500 
                    rounded-full flex items-center justify-center 
                    flex-shrink-0 mt-0.5 transition-colors duration-300"
          >
            <span className="text-white text-xs font-bold">i</span>
          </div>

          {/* Texte */}
          <div className="text-sm text-blue-800 dark:text-slate-200 transition-colors duration-300">
            <p className="font-medium mb-1">{t("Skills.noteTitle")}</p>
            <p className="text-blue-700 dark:text-slate-300">
              {t("Skills.noteText")}
            </p>
          </div>
        </div>
      </div>



      {/* Bouton de tri */}
      <div className="mt-6 mb-4">
        <button
          onClick={() => setGroupByCategory(!groupByCategory)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            groupByCategory
              ? "bg-blue-600 text-white shadow-lg hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-sky-950 dark:hover:text-white"
              : "bg-gray-100 dark:bg-sky-950 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-sky-900"
          }`}
        >
          {groupByCategory ?  t("Skills.global")  : t("Skills.category") }
        </button>
      </div>

      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block">
        {!groupByCategory ? (
          // Vue globale - tous les skills sans distinction de catégorie
          <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
            {skills.map((skill: Skills, index: number) =>
              renderSkillCard(skill, index, "global")
            )}
          </div>
        ) : shouldDisplayInline ? (
          // Vue catégories en ligne (quand elles peuvent tenir sur la même ligne)
          <div className="space-y-8">
            {/* {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => ( */}
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                  {category}
                </h3>
                <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
                  {(categorySkills as Skills[]).map(
                    (skill: Skills, index: number) =>
                      renderSkillCard(skill, index, category)
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Vue catégories en colonnes (disposition par défaut)
          Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
                {(categorySkills as Skills[]).map(
                  (skill: Skills, index: number) =>
                    renderSkillCard(skill, index, category)
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {!groupByCategory ? (
          // Vue globale mobile
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skill: Skills, index: number) =>
              renderMobileSkillCard(skill, index, "global")
            )}
          </div>
        ) : (
          // Vue par catégories mobile
          Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {category}
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {(categorySkills as Skills[]).map(
                  (skill: Skills, index: number) =>
                    renderMobileSkillCard(skill, index, category)
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Statistiques */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-sky-800/60 dark:via-sky-900/60 dark:to-sky-800/60 rounded-2xl p-6 md:p-8">
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
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Catégories
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-slate-300 mb-2">
              3+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Années exp.
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-slate-300 mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Projets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
