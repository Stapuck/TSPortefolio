import { useState } from "react";
import { useTranslation } from "react-i18next";

const AchievementRanking = () => {
  const {t} = useTranslation();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{t('AchievementR.medal&race')}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {/* todo : faire une liste en local ou gloable ?  */}
                <li>
                  2025 Continental Championship KX1 time trial - Gold Medal
                </li>
                <li>2025 Continental Championship KX1 H2H - Gold Medal</li>
                <li>2025 Continental Championship C1 slalom - Bronze Medal</li>
                <li>2018 Youth Olympics game C1 slalom - Gold Medal</li>
                <li>2018 Youth Africa Games C1 slalom - Gold Medal</li>
                <li>2018 Youth Africa Games C1 sprint - bronze Medal</li>
              </ul>
            </div>

            {/* Classement */}
            <div
              className="w-full cursor-pointer perspective transform transition-transform duration-300 hover:scale-105 "
              onClick={() => setFlipped(!flipped)}
            >
              {/* Indicateurs */}
              <div className="flex space-x-2 m-3 justify-center">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    flipped ? "bg-gray-400" : "bg-black"
                  }`}
                ></span>
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    flipped ? "bg-black" : "bg-gray-400"
                  }`}
                ></span>
              </div>
              <div
                className={`relative w-full h-auto transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Face avant */}
                <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-blue-100 backface-hidden">
                  <h3 className="font-semibold text-xl">
                    {t('AchievementR.worldrankingsla')}
                  </h3>
                  <div className="flex justify-between">
                    <span>{t('AchievementR.senior')} :</span>
                    <span>#85</span>
                  </div>
                  {/* todo : enlever U23 en 2026 */}
                  {/* mettre les vrais valeurs de ranking  */}
                  <div className="flex justify-between">
                    <span>U23:</span>
                    <span>#27</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('AchievementR.continentalranking')} :</span>
                    <span>#3</span>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-green-100 backface-hidden rotate-y-180">
                  <h3 className="font-semibold text-xl">
                    {t('AchievementR.worldrankingkx')}
                  </h3>
                  <div className="flex justify-between">
                    <span>{t('AchievementR.senior')} :</span>
                    <span>#12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>U23:</span>
                    <span>#5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('AchievementR.continentalranking')} :</span>
                    <span>#1</span>
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
          </div>
  )
}

export default AchievementRanking

// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// const AchievementRanking = () => {
//   const { t } = useTranslation();
//   const [flipped, setFlipped] = useState(false);

//   const achievements = [
//     { year: "2025", event: "Continental Championship KX1 time trial", medal: "Gold" },
//     { year: "2025", event: "Continental Championship KX1 H2H", medal: "Gold" },
//     { year: "2025", event: "Continental Championship C1 slalom", medal: "Bronze" },
//     { year: "2018", event: "Youth Olympics game C1 slalom", medal: "Gold" },
//     { year: "2018", event: "Youth Africa Games C1 slalom", medal: "Gold" },
//     { year: "2018", event: "Youth Africa Games C1 sprint", medal: "Bronze" },
//   ];

//   const getMedalColor = (medal: any) => {
//     switch (medal.toLowerCase()) {
//       case 'gold': return 'text-yellow-500';
//       case 'bronze': return 'text-amber-600';
//       default: return 'text-gray-500';
//     }
//   };

//   const getMedalIcon = (medal : any) => {
//     return (
//       <div className={`w-3 h-3 rounded-full ${
//         medal.toLowerCase() === 'gold' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
//         medal.toLowerCase() === 'bronze' ? 'bg-gradient-to-br from-amber-500 to-amber-700' :
//         'bg-gradient-to-br from-gray-400 to-gray-600'
//       }`} />
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid lg:grid-cols-2 gap-12">
//         {/* Achievements Section */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               {t('AchievementR.medal&race') || 'Medals & Achievements'}
//             </h2>
//           </div>
          
//           <div className="space-y-4">
//             {achievements.map((achievement, index) => (
//               <div 
//                 key={index}
//                 className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4">
//                     {getMedalIcon(achievement.medal)}
//                     <div>
//                       <p className="font-medium text-gray-800 group-hover:text-gray-900">
//                         {achievement.event}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {achievement.year}
//                       </p>
//                     </div>
//                   </div>
//                   <span className={`font-semibold text-sm ${getMedalColor(achievement.medal)}`}>
//                     {achievement.medal} Medal
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Rankings Section */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               World Rankings
//             </h2>
//           </div>

//           {/* Flip Card Container */}
//           <div className="relative">
//             {/* Toggle Indicators */}
//             <div className="flex justify-center space-x-3 mb-6">
//               <button
//                 onClick={() => setFlipped(false)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   !flipped 
//                     ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' 
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 Slalom
//               </button>
//               <button
//                 onClick={() => setFlipped(true)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   flipped 
//                     ? 'bg-green-500 text-white shadow-lg shadow-green-200' 
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 Kayak Cross
//               </button>
//             </div>

//             {/* Flip Card */}
//             <div 
//               className="relative w-full h-80 cursor-pointer perspective-1000"
//               onClick={() => setFlipped(!flipped)}
//             >
//               <div className={`
//                 relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
//                 ${flipped ? 'rotate-y-180' : ''}
//               `}>
//                 {/* Slalom Rankings (Front) */}
//                 <div className="absolute inset-0 w-full h-full backface-hidden">
//                   <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full shadow-lg border border-blue-200">
//                     <div className="flex items-center space-x-3 mb-8">
//                       <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
//                         <span className="text-white font-bold">C1</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-blue-800">
//                         {t('AchievementR.worldrankingsla') || 'World Ranking Slalom'}
//                       </h3>
//                     </div>
                    
//                     <div className="space-y-6">
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">
//                           {t('AchievementR.senior') || 'Senior'}
//                         </span>
//                         <span className="text-2xl font-bold text-blue-600">#85</span>
//                       </div>
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">U23</span>
//                         <span className="text-2xl font-bold text-blue-600">#27</span>
//                       </div>
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">
//                           {t('AchievementR.continentalranking') || 'Continental'}
//                         </span>
//                         <span className="text-2xl font-bold text-blue-600">#3</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Kayak Cross Rankings (Back) */}
//                 <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
//                   <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full shadow-lg border border-green-200">
//                     <div className="flex items-center space-x-3 mb-8">
//                       <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
//                         <span className="text-white font-bold">KX</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-green-800">
//                         {t('AchievementR.worldrankingkx') || 'World Ranking Kayak Cross'}
//                       </h3>
//                     </div>
                    
//                     <div className="space-y-6">
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">
//                           {t('AchievementR.senior') || 'Senior'}
//                         </span>
//                         <span className="text-2xl font-bold text-green-600">#12</span>
//                       </div>
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">U23</span>
//                         <span className="text-2xl font-bold text-green-600">#5</span>
//                       </div>
//                       <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl">
//                         <span className="font-medium text-gray-700">
//                           {t('AchievementR.continentalranking') || 'Continental'}
//                         </span>
//                         <span className="text-2xl font-bold text-green-600">#1</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <p className="text-center text-sm text-gray-500 mt-4">
//               Click to flip between disciplines
//             </p>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AchievementRanking;