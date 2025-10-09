// import { useState, useRef } from 'react';
// import { useTranslation } from 'react-i18next';

// type Sponsor = {
//   id: number;
//   name: string;
//   logo: string;
//   date: string;
//   amount: string;
//   story: string;
// };

// const SponsorSlider = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [hoveredSponsor, setHoveredSponsor] = useState<Sponsor | null>(null);
//   const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const sliderRef = useRef(null);
//   const {t} = useTranslation();

//   // Données de sponsors d'exemple
//   const sponsors = [
//     {
//       id: 1,
//       name: "TechCorp",
//       logo: "https://via.placeholder.com/150/0066cc/ffffff?text=TechCorp",
//       date: "Janvier 2024",
//       amount: "50 000€",
//       story: "TechCorp nous a rejoint en début d'année 2024 avec une vision partagée de l'innovation technologique. Notre collaboration a débuté lors d'un événement où nous avons découvert nos valeurs communes autour du développement durable et de l'excellence technique."
//     },
//     {
//       id: 2,
//       name: "InnovateLab",
//       logo: "https://via.placeholder.com/150/ff6600/ffffff?text=InnovateLab",
//       date: "Mars 2024",
//       amount: "35 000€",
//       story: "InnovateLab est devenu notre partenaire stratégique après avoir constaté l'impact de nos projets communs. Leur expertise en R&D complète parfaitement notre approche, créant une synergie unique dans le secteur."
//     },
//     {
//       id: 3,
//       name: "GreenFuture",
//       logo: "https://via.placeholder.com/150/00aa44/ffffff?text=GreenFuture",
//       date: "Mai 2024",
//       amount: "45 000€",
//       story: "GreenFuture partage notre engagement envers l'environnement. Cette collaboration est née d'une rencontre fortuite lors d'une conférence sur le développement durable, et s'est rapidement transformée en un partenariat solide axé sur l'impact écologique."
//     },
//     {
//       id: 4,
//       name: "DataStream",
//       logo: "https://via.placeholder.com/150/9933cc/ffffff?text=DataStream",
//       date: "Juillet 2024",
//       amount: "60 000€",
//       story: "DataStream représente l'excellence dans l'analyse de données. Notre partenariat est fondé sur une confiance mutuelle et une volonté commune de repousser les limites de ce qui est possible avec les données modernes."
//     },
//     {
//       id: 5,
//       name: "CloudSys",
//       logo: "https://via.placeholder.com/150/ff3366/ffffff?text=CloudSys",
//       date: "Septembre 2024",
//       amount: "40 000€",
//       story: "CloudSys nous accompagne dans notre transformation digitale. Leur expertise cloud et leur approche client-centrique font d'eux un partenaire idéal pour nos ambitions de croissance et d'innovation."
//     },
//     {
//       id: 6,
//       name: "SecureNet",
//       logo: "https://via.placeholder.com/150/0099cc/ffffff?text=SecureNet",
//       date: "Novembre 2024",
//       amount: "55 000€",
//       story: "SecureNet assure la sécurité de nos infrastructures. Cette collaboration stratégique est le résultat d'une longue réflexion sur nos besoins en cybersécurité et leur capacité à y répondre avec excellence."
//     },
//     // {
//     //   id: 1,
//     //   name_fr: "",
//     //   name_en: "",
//     //   logo: "",
//     //   date_fr: "",
//     //   date_en: "",
//     //   amount: "55 000€",
//     //   story_fr: "",
//     //   story_en: "",
//     // }
//   ];

// //   Vick, Grandmont, Pôle de tours, lunaar, MOC, Fédé, Ministère,  ??

//   const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

//   const handleMouseEnter = (sponsor : any, e : any) => {
//     setIsPaused(true);
//     setHoveredSponsor(sponsor);
//     const rect = e.currentTarget.getBoundingClientRect();
//     setTooltipPosition({
//       x: rect.left + rect.width / 2,
//       y: rect.top
//     });
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//     setHoveredSponsor(null);
//   };

//   const handleClick = (sponsor : any) => {
//     setSelectedSponsor(sponsor);
//   };

//   return (
//     <div className="w-full py-2 overflow-hidden">

//       <div className="relative">
//         <div className="overflow-hidden" ref={sliderRef}>
//           <div
//             className={`flex gap-8 ${isPaused ? '' : 'animate-scroll'}`}
//             style={{
//               width: 'max-content'
//             }}
//           >
//             {duplicatedSponsors.map((sponsor, index) => (
//               <div
//                 key={`${sponsor.id}-${index}`}
//                 className="flex-shrink-0 w-40 h-40 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
//                 onMouseEnter={(e) => handleMouseEnter(sponsor, e)}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={() => handleClick(sponsor)}
//               >
//                 <div className="w-full h-full flex items-center justify-center p-6">
//                   <img
//                     src={sponsor.logo}
//                     alt={sponsor.name}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Tooltip */}
//         {hoveredSponsor && (
//           <div
//             className="fixed z-50 bg-slate-800 text-white px-4 py-3 rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-full -mt-2"
//             style={{
//               left: `${tooltipPosition.x}px`,
//               top: `${tooltipPosition.y}px`
//             }}
//           >
//             <div className="text-sm font-semibold mb-1">{hoveredSponsor.name}</div>
//             <div className="text-xs text-slate-300">{hoveredSponsor.date}</div>
//             <div className="text-xs text-green-400 font-bold mt-1">{hoveredSponsor.amount}</div>
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
//               <div className="border-8 border-transparent border-t-slate-800"></div>
//             </div>
//           </div>
//         )}

//         {/* Modal */}
//         {selectedSponsor && (
//           <div
//             className="fixed inset-0 bg-black/60 bg-opacity-30 flex items-center justify-center z-50 p-4"
//             onClick={() => setSelectedSponsor(null)}
//           >
//             <div
//               className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 transform transition-all"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={selectedSponsor.logo}
//                     alt={selectedSponsor.name}
//                     className="w-20 h-20 object-contain"
//                   />
//                   <div>
//                     <h3 className="text-3xl font-bold text-slate-800">
//                       {selectedSponsor.name}
//                     </h3>
//                     <p className="text-slate-600">{selectedSponsor.date}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setSelectedSponsor(null)}
//                   className="text-slate-400 hover:text-slate-600 transition-colors"
//                 >
//                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg">
//                   {selectedSponsor.amount}
//                 </div>
//               </div>

//               <div className="text-slate-700 leading-relaxed">
//                 <h4 className="text-xl font-semibold mb-3 text-slate-800">
//                   {t("Sport.sponsorhistory")}
//                 </h4>
//                 <p className="text-justify">
//                   {selectedSponsor.story}
//                 </p>
//               </div>

//               <div className="mt-8 flex justify-end">
//                 <button
//                   onClick={() => setSelectedSponsor(null)}
//                   className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//                 >
//                   {t('EventList.closewithoucross')}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 13s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorSlider;



import { useRef } from 'react';
import { sponsors } from '../medias/index-global';

const SponsorSlider = () => {
  const sliderRef = useRef(null);
  // const initialLang = document.documentElement.lang || "fr";
  const initialLang = localStorage.getItem("lang") || "fr";

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="w-full py-2 overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex gap-8 animate-scroll"
            style={{
              width: 'max-content'
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 w-40 h-40 bg-white rounded-xl shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img
                    src={sponsor.logo}
                    alt={initialLang === "fr" ? sponsor.name_fr : sponsor.name_en}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SponsorSlider;