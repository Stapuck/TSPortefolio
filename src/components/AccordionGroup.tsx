import { accordionData } from "../medias/databases/index-global";
import Accordion from "../components/Accordion";

import { useTranslation } from "react-i18next";

const AccordionGroup = () => {
  const initialLang = document.documentElement.lang || "fr";
  const {t} = useTranslation();


  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-3">
        <div className="inline-flex items-center justify-center">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {t('Profile.faq')}
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full ml-4"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          {t('Profile.faqtxt')}
          
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl"></div>

        {/* Effet de border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-[1px] blur-[70px]">
          {/* <div className="absolute inset-0 blur-3xl rounded-3xl p-[1px]"> */}
          {/* <div className="bg-white dark:bg-gray-900 rounded-3xl h-full w-full"></div> */}
          {/* <div className="bg-white rounded-3xl h-[90%] w-[95%] absolute top-3 right-2"></div> */}{" "}
          <div className="absolute inset-4 bg-white rounded-3xl dark:bg-gray-200"></div>
        </div>

        {/* Contenu */}
        <div className="relative p-8 space-y-2">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <Accordion title={initialLang === "fr" ? item.title_fr : item.title_en}>
                <div className="text-base leading-relaxed">{initialLang === "fr" ? item.text_fr : item.text_en}</div>
              </Accordion>
            </div>
          ))}
        </div>

        {/* Effet de lueur en bas */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AccordionGroup;
