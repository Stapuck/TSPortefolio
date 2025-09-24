// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// const AchievementRanking = () => {
//   const {t} = useTranslation();
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className="grid md:grid-cols-2 gap-8">
//             {/* Achievements */}
//             <div className="space-y-2">
//               <h3 className="text-xl font-semibold">{t('AchievementR.medal&race')}</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 {/* todo : faire une liste en local ou gloable ?  */}
//                 <li>
//                   2025 Continental Championship KX1 time trial - Gold Medal
//                 </li>
//                 <li>2025 Continental Championship KX1 H2H - Gold Medal</li>
//                 <li>2025 Continental Championship C1 slalom - Bronze Medal</li>
//                 <li>2018 Youth Olympics game C1 slalom - Gold Medal</li>
//                 <li>2018 Youth Africa Games C1 slalom - Gold Medal</li>
//                 <li>2018 Youth Africa Games C1 sprint - bronze Medal</li>
//               </ul>
//             </div>

//             {/* Classement */}
//             <div
//               className="w-full cursor-pointer perspective transform transition-transform duration-300 hover:scale-105 "
//               onClick={() => setFlipped(!flipped)}
//             >
//               {/* Indicateurs */}
//               <div className="flex space-x-2 m-3 justify-center">
//                 <span
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     flipped ? "bg-gray-400" : "bg-black"
//                   }`}
//                 ></span>
//                 <span
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     flipped ? "bg-black" : "bg-gray-400"
//                   }`}
//                 ></span>
//               </div>
//               <div
//                 className={`relative w-full h-auto transition-transform duration-500 transform-style-preserve-3d ${
//                   flipped ? "rotate-y-180" : ""
//                 }`}
//               >
//                 {/* Face avant */}
//                 <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-blue-100 backface-hidden">
//                   <h3 className="font-semibold text-xl">
//                     {t('AchievementR.worldrankingsla')}
//                   </h3>
//                   <div className="flex justify-between">
//                     <span>{t('AchievementR.senior')} :</span>
//                     <span>#85</span>
//                   </div>
//                   {/* todo : enlever U23 en 2026 */}
//                   {/* mettre les vrais valeurs de ranking  */}
//                   <div className="flex justify-between">
//                     <span>U23:</span>
//                     <span>#27</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>{t('AchievementR.continentalranking')} :</span>
//                     <span>#3</span>
//                   </div>
//                 </div>

//                 {/* Face arrière */}
//                 <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-green-100 backface-hidden rotate-y-180">
//                   <h3 className="font-semibold text-xl">
//                     {t('AchievementR.worldrankingkx')}
//                   </h3>
//                   <div className="flex justify-between">
//                     <span>{t('AchievementR.senior')} :</span>
//                     <span>#12</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>U23:</span>
//                     <span>#5</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>{t('AchievementR.continentalranking')} :</span>
//                     <span>#1</span>
//                   </div>
//                 </div>
//               </div>

//               <style>
//                 {`
//                 .perspective {
//                   perspective: 1000px;
//                 }
//                 .backface-hidden {
//                   backface-visibility: hidden;
//                 }
//                 .rotate-y-180 {
//                   transform: rotateY(180deg);
//                 }
//                 .transform-style-preserve-3d {
//                   transform-style: preserve-3d;
//                 }
//               `}
//               </style>
//             </div>
//           </div>
//   )
// }

// export default AchievementRanking

//test 1

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Medal, Trophy, RotateCcw } from "lucide-react";

const AchievementRanking = () => {
  const {t} = useTranslation();
  const [flipped, setFlipped] = useState(false);
  const initialLang = document.documentElement.lang || "fr";


  const achievements = [
    { year: "2025", event_fr:"Course de Référence Africaine KX1 H2H", event_en: "Continental Championship KX1 H2H", medal: "Gold", color: "from-yellow-400 to-yellow-600" },
    { year: "2025", event_fr:"Course de Référence Africaine KX1 Timetrial", event_en: "Continental Championship KX1 time trial", medal: "Gold", color: "from-yellow-400 to-yellow-600" },
    { year: "2025", event_fr:"Championnat continental C1 slalom", event_en: "Continental Championship C1 slalom", medal: "Bronze", color: "from-amber-600 to-amber-800" },
    { year: "2024", event_fr:"Championnat continental C1 slalom", event_en: "Continental Championship C1 slalom", medal: "Bronze", color: "from-amber-600 to-amber-800" },
    { year: "2018", event_fr:"Jeux Olympique de la Jeunesse C1 slalom", event_en: "Youth Olympics game C1 slalom", medal: "Gold", color: "from-yellow-400 to-yellow-600" },
    { year: "2018", event_fr:"Jeux Africain de la Jeunesse C1 slalom", event_en: "Youth Africa Games C1 slalom", medal: "Gold", color: "from-yellow-400 to-yellow-600" },
    { year: "2018", event_fr:"Jeux Africain de la Jeunesse C1 course en ligne", event_en: "Youth Africa Games C1 sprint", medal: "Bronze", color: "from-amber-600 to-amber-800" },
  ];

  const getMedalIcon = (medal : any) => {
    switch(medal.toLowerCase()) {
      case 'gold': return <Medal className="w-5 h-5 text-yellow-500" />;
      case 'bronze': return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Medal className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-6 bg-sky-100 dark:bg-sky-900 transition-colors duration-300 rounded-3xl">
      {/* Achievements Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t('AchievementR.medal&race')}
          </h3>
        </div>

        <div className="space-y-4">
          {achievements.slice(0,3).map((achievement, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg dark:shadow-slate-900/50 dark:hover:shadow-slate-900/70 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getMedalIcon(achievement.medal)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">
                      {achievement.year}
                    </span>
                    <span className={`px-2 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full`}>
                      {achievement.medal}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-slate-300 font-medium group-hover:text-gray-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                    {initialLang === "fr" ? achievement.event_fr : achievement.event_en}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {achievements.length > 3 && (
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-xl p-4 border-2 border-dashed border-gray-300 dark:border-slate-500 hover:border-gray-400 dark:hover:border-slate-400 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(Math.max(3, achievements.length - 3))].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-2 border-white dark:border-slate-600 flex items-center justify-center">
                      <Medal className="w-3 h-3 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-700 dark:text-slate-300">
                    +{achievements.length - 3} {t('AchievementR.moreachievements')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rankings Flip Card */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
           {t('AchievementR.worldrank')}
          </h3>
        </div>

        <div className="relative">
          {/* Flip Instructions */}
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-gray-600 dark:text-slate-400">
            <RotateCcw className="w-4 h-4" />
            <span>{t('AchievementR.clicktoflip')}</span>
          </div>

          <div
            className="w-full cursor-pointer perspective group"
            onClick={() => setFlipped(!flipped)}
          >
            {/* Flip Indicators */}
            <div className="flex space-x-2 mb-4 justify-center">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    !flipped ? "bg-blue-500 scale-110" : "bg-gray-300 dark:bg-slate-600"
                  }`}
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  !flipped ? "text-blue-500" : "text-gray-500 dark:text-slate-500"
                }`}>
                  Slalom
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    flipped ? "bg-green-500 scale-110" : "bg-gray-300 dark:bg-slate-600"
                  }`}
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  flipped ? "text-green-500" : "text-gray-500 dark:text-slate-500"
                }`}>
                  Kayak Cross
                </span>
              </div>
            </div>

            <div
              className={`relative w-full h-auto transition-transform duration-700 transform-style-preserve-3d group-hover:scale-105 ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Slalom Rankings (Front) */}
              <div className="absolute w-full rounded-xl p-6 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 backface-hidden border border-blue-200 dark:border-slate-600 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-blue-800 dark:text-blue-300">
                    {t('AchievementR.worldrankingsla')}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">{t('AchievementR.senior')} :</span>
                    <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">#85</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">U23:</span>
                    <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">#27</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">{t('AchievementR.continentalranking')} :</span>
                    <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">#3</span>
                  </div>
                </div>
              </div>

              {/* Kayak Cross Rankings (Back) */}
              <div className="absolute w-full rounded-xl p-6 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 backface-hidden rotate-y-180 border border-green-200 dark:border-slate-600 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-green-800 dark:text-green-300">
                    {t('AchievementR.worldrankingkx')}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">{t('AchievementR.senior')} :</span>
                    <span className="font-bold text-2xl text-green-600 dark:text-green-400">#12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">U23:</span>
                    <span className="font-bold text-2xl text-green-600 dark:text-green-400">#5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 dark:text-slate-200">{t('AchievementR.continentalranking')} :</span>
                    <span className="font-bold text-2xl text-green-600 dark:text-green-400">#1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
        `}
      </style>
    </div>
  );
};

export default AchievementRanking;