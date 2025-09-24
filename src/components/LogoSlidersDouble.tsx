"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type LogoItem = {
  id: number;
  name_fr: string;
  name_en: string;
  description_fr: string;
  description_en: string;
  price: string;
  logo: string;
};

interface LogoSlidersDoubleProps {
  items: LogoItem[];
  speed?: number; // en secondes pour une boucle complète
}

export default function LogoSlidersDouble({ items, speed = 30 }: LogoSlidersDoubleProps) {
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Diviser la liste en deux moitiés
  const mid = Math.ceil(items.length / 2);
  const topItems = items.slice(0, mid);
  const bottomItems = items.slice(mid);

  const startTop = () =>
    topControls.start({
      x: "-100%",
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });

  const startBottom = () =>
    bottomControls.start({
      x: "100%",
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });

  const stop = (controls: any) => controls.stop();

  useEffect(() => {
    startTop();
    startBottom();
    return () => {
      topControls.stop();
      bottomControls.stop();
    };
  }, []);

  const renderSlider = (itemsArray: LogoItem[], controls: any, reverse = false) => (
    <motion.div
      className="flex gap-8 w-max"
      animate={controls}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      {itemsArray.concat(itemsArray).map((item, i) => (
        <div
          key={item.id + "-" + i}
          className="relative w-32 h-32 flex items-center justify-center bg-white rounded-2xl shadow hover:cursor-pointer"
          onMouseEnter={() => {
            stop(controls);
            setHoveredId(item.id);
          }}
          onMouseLeave={() => {
            if (controls === topControls) startTop();
            else startBottom();
            setHoveredId(null);
          }}
        >
          <img
            src={item.logo}
            alt={item.name_en}
            className="max-h-20 object-contain"
          />
          {hoveredId === item.id && (
            <div className="absolute bottom-full mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 text-center z-50">
              <p className="font-bold">{item.name_fr} / {item.name_en}</p>
              <p>{item.description_fr} / {item.description_en}</p>
              <p className="mt-1 font-semibold">{item.price}</p>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="flex flex-col gap-12 overflow-hidden">
      {renderSlider(topItems, topControls, false)}
      {renderSlider(bottomItems, bottomControls, true)}
    </div>
  );
}
