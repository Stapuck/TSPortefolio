import { useEffect, useState } from "react";
import { accordionDatafr } from "../medias/databases/index-fr";
import { accordionDataen } from "../medias/databases/index-en";
import Accordion from "../components/Accordion";

const AccordionGroup = () => {
  const initialLang = document.documentElement.lang || "fr";


  // todo : changer les data pour une vrai FAQ : 
  const [accordionData, setAccordionData] = useState(
    initialLang === "en" ? accordionDataen : accordionDatafr
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang;
      const newaccordiondata =
        lang === "en" ? accordionDataen : accordionDatafr;
      setAccordionData(newaccordiondata);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pb-1 my-4">
        {accordionData.map((item, index) => (
          <div className="my-2" key={index}>
            <Accordion title={(item.title)}>{(item.text)}</Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionGroup;


// import { useEffect, useState } from "react";
// import { accordionDatafr } from "../medias/databases/index-fr";
// import { accordionDataen } from "../medias/databases/index-en";
// import Accordion from "../components/Accordion";

// const AccordionGroup = () => {
//   const initialLang = document.documentElement.lang || "fr";

//   // todo : changer les data pour une vrai FAQ : 
//   const [accordionData, setAccordionData] = useState(
//     initialLang === "en" ? accordionDataen : accordionDatafr
//   );

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       const lang = document.documentElement.lang;
//       const newaccordiondata =
//         lang === "en" ? accordionDataen : accordionDatafr;
//       setAccordionData(newaccordiondata);
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["lang"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* En-tête avec titre et description */}
//       <div className="text-center mb-12">
//         <div className="inline-flex items-center justify-center">
//           <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
//             Questions Fréquentes
//           </h3>
//           <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full ml-4"></div>
//         </div>
//         <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
//           Découvrez les réponses aux questions les plus courantes
//         </p>
//       </div>

//       {/* Container principal avec effet glassmorphisme */}
//       <div className="relative">
//         {/* Fond décoratif animé */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl"></div>
        
//         {/* Effet de border gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-[1px]">
//           <div className="bg-white dark:bg-gray-900 rounded-3xl h-full w-full"></div>
//         </div>

//         {/* Contenu */}
//         <div className="relative p-8 space-y-2">
//           {accordionData.map((item, index) => (
//             <div 
//               key={index}
//               className="transform transition-all duration-300 hover:scale-[1.02]"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//                 opacity: 0,
//                 animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
//               }}
//             >
//               <Accordion title={item.title}>
//                 <div className="text-base leading-relaxed">
//                   {item.text}
//                 </div>
//               </Accordion>
//             </div>
//           ))}
//         </div>

//         {/* Effet de lueur en bas */}
//         <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AccordionGroup;