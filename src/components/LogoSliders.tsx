"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { X, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

type LogoItem = {
  id: number;
  name_fr: string;
  name_en: string;
  description_fr: string;
  description_en: string;
  price: string;
  logo: string;
};

interface LogoSlidersProps {
  items: LogoItem[];
  speed?: number;
}

export default function LogoSliders({ items, speed = 30 }: LogoSlidersProps) {

  const { t } = useTranslation();
  const controls = useAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<LogoItem | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const initialLang = document.documentElement.lang || "fr";


  // Calculer la largeur totale d'un set complet de logos
  const logoWidth = 128 + 32; // 128px (w-32) + 32px (gap-8)
  const totalWidth = items.length * logoWidth;

  const startAnimation = () => {
    controls.start({
      x: -totalWidth,
      transition: { 
        duration: speed, 
        repeat: Infinity, 
        ease: "linear",
        repeatType: "loop"
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [items.length]);

  const handleMouseEnter = (item: LogoItem, event: React.MouseEvent) => {
    stopAnimation();
    setHoveredId(item.id);
    
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleMouseLeave = () => {
    startAnimation();
    setHoveredId(null);
  };

  const handleClick = (item: LogoItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    // todo : dark mode de card + hover + modal
    <div className="relative">
      <div className="overflow-hidden py-4">
        <motion.div
          className="flex gap-8 w-max"
          animate={controls}
          initial={{ x: 0 }}
        >
          {/* Premier set de logos */}
          {items.map((item, i) => (
            <div
            //   key={`original-${item.id}`}
              key={`original-${i}`}
              className="relative w-32 h-32 flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-200"
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(item)}
            >
              <img
                src={item.logo}
                alt={item.name_en}
                className="max-h-20 max-w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Indicateur d'info au hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Info size={16} className="text-blue-500" />
              </div>
            </div>
          ))}
          
          {/* Deuxième set de logos pour la continuité */}
          {items.map((item, i) => (
            <div
              key={`duplicate-${i}`}
            //   key={`original-${item.id}`}
              className="relative w-32 h-32 flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-200"
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(item)}
            >
              <img
                src={item.logo}
                alt={item.name_en}
                className="max-h-20 max-w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Indicateur d'info au hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Info size={16} className="text-blue-500" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tooltip */}
      {hoveredId && (
        <div 
          className="fixed z-40 pointer-events-none"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="bg-gray-900 text-white text-sm rounded-lg p-3 shadow-xl max-w-xs">
            {(() => {
              const item = items.find(i => i.id === hoveredId);
              return item ? (
                <div className="text-center">
                  {initialLang === "fr" ? 
                  <p className="font-bold text-blue-300">{item.name_fr}</p> :
                  <p className="text-gray-300 text-xs">{item.name_en}</p>}
                  <p className="mt-1 font-semibold text-green-400">{item.price}</p>
                  <p className="text-xs text-gray-400 mt-1"> {t('Sport.clicktoinfo')}</p>
                </div>
              ) : null;
            })()}
            {/* Flèche du tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 bg-opacity-20 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img
                    src={selectedItem.logo}
                    alt={selectedItem.name_en}
                    className="max-h-12 max-w-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{initialLang === "fr" ? selectedItem.name_fr : selectedItem.name_en }</h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('Sport.description')}</h3>
                  <p className="text-gray-600">{ initialLang === "fr" ? selectedItem.description_fr : selectedItem.description_en}</p>
                </div>
                            
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{('Sport.price')}</h3>
                  <p className="text-2xl font-bold text-green-600">{selectedItem.price}</p>
                </div>
            {/* todo : rajouter date et autre info cool ici  since 2021  /// 2021-2023 // ... */}
              </div>
            </div>


            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                {t('EventList.close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}