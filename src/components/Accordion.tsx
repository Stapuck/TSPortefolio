import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionSchoolProps {
  title: string;
  children: React.ReactNode;
}

const   AccordionSchool: React.FC<AccordionSchoolProps> = ({
  title,
  children,
}) => {
  const [accordionOpen, setaccordionOpen] = useState(false);

  return (
    <div className="group relative my-6">
      {/* Effet de fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-80"></div>
      
      {/* Conteneur principal */}
      {/* todo : revoir darkmode */}
      <div className="relative bg-white dark:bg-sky-800/80 rounded-2xl shadow-xl border border-gray-200 dark:border-sky-  hover:shadow-2xl transition-all duration-300">
        {/* Bouton d'accordéon */}
        <button
          onClick={() => setaccordionOpen(!accordionOpen)}
          // className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300 group/button"
          className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50  rounded-2xl transition-all duration-300 group/button"
        >
          {/* <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 pr-4 group-hover/button:text-blue-600 dark:group-hover/button:text-blue-400 transition-colors duration-300"> */}
          <span className="text-lg font-semibold text-gray-800  pr-4 group-hover/button:text-blue-600  transition-colors duration-300">
            {title}
          </span>
          
          <div className="flex-shrink-0">
            {/* <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover/button:from-blue-200 group-hover/button:to-purple-200 dark:group-hover/button:from-blue-800/40 dark:group-hover/button:to-purple-800/40 transition-all duration-300"> */}
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100   group-hover/button:from-blue-200 group-hover/button:to-purple-200  transition-all duration-300">
              <ChevronDown
                // className={`w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 ${
                className={`w-5 h-5 text-blue-600  transform transition-transform duration-300 ${
                  accordionOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </button>
        
        {/* Contenu de l'accordéon */}
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 pb-6"
              : "grid-rows-[0fr] opacity-0 pb-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6">
              {/* Ligne décorative */}
              {/* <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4"></div> */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300  to-transparent mb-4"></div>
              
              {/* Contenu */}
              {/* <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3"> */}
              <div className="text-gray-700 leading-relaxed space-y-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSchool;
