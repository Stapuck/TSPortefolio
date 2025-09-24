// type TooltipProps = {
//   x: string;
//   y: string;
//   img: string;
//   price: string;
//   text: string;
// };

// const TooltipPoint = ({ x, y, img, price, text }: TooltipProps) => {
//   return (
//     <div
//       className="absolute group"
//       style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
//     >
//       {/* Point bleu */}
//       <div className="w-3 h-3 bg-orange-600 rounded-full cursor-pointer"></div>

//       {/* Tooltip au hover */}
//       <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-30 p-2 bg-white rounded-xl shadow-lg
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                       z-10 group-hover:z-50">
//         <img src={img} alt={text} className="w-full h-24 object-cover rounded-lg mb-2" />
//         <p className="font-bold text-black">{price}</p>
//         <p className="text-xs text-gray-600">{text}</p>
//       </div>
//     </div>
//   );
// };

// export default TooltipPoint;

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type TooltipProps = {
  x: string;
  y: string;
  img: string;
  price: string;
  text: string;
  variant?: "hover" | "click" | "always";
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark" | "colored";
};

const TooltipPoint = ({
  x,
  y,
  img,
  price,
  text,
  variant = "hover",
  size = "lg",
  theme = "light",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(variant === "always");
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: {
      point: "w-2 h-2",
      tooltip: "w-24",
      image: "h-16",
      price: "text-xs",
      text: "text-xs",
    },
    md: {
      point: "w-3 h-3",
      tooltip: "w-32",
      image: "h-20",
      price: "text-sm",
      text: "text-xs",
    },
    lg: {
      point: "w-4 h-4",
      tooltip: "w-40",
      image: "h-24",
      price: "text-base",
      text: "text-sm",
    },
  };

  const themeClasses = {
    light: {
      point: "bg-blue-600 border-2 border-white shadow-md",
      tooltip: "bg-white border border-gray-200 text-gray-900",
      price: "text-blue-600",
      text: "text-gray-600",
    },
    dark: {
      // point: "bg-gray-800 border-2 border-gray-600 shadow-lg",
      point: "bg-blue-600 border-2 border-white shadow-md",
      tooltip: "bg-gray-800 border border-gray-600 text-white",
      price: "text-blue-400",
      text: "text-gray-300",
    },
    colored: {
      point:
        "bg-gradient-to-r from-orange-500 to-red-500 border-2 border-white shadow-lg",
      tooltip: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
      price: "text-yellow-100",
      text: "text-orange-100",
    },
  };

  const currentSize = sizeClasses[size];
  const currentTheme = themeClasses[theme];

  const shouldShowTooltip = () => {
    if (variant === "always") return true;
    if (variant === "click") return isVisible;
    if (variant === "hover") return isHovered;
    return false;
  };

  const handlePointClick = () => {
    if (variant === "click") {
      setIsVisible(!isVisible);
    }
  };

  const handleMouseEnter = () => {
    if (variant === "hover") {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (variant === "hover") {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="absolute group z-20"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      {/* Interactive Point */}
      <div
        className={`
          ${currentSize.point} 
          ${currentTheme.point}
          rounded-full cursor-pointer 
          transition-all duration-300 ease-out
          hover:scale-125 active:scale-110
          ${variant === "click" ? "animate-pulse" : ""}
        `}
        onClick={handlePointClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Voir détails: ${text}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handlePointClick();
          }
        }}
      >
        {/* Ripple effect for click variant */}
        {variant === "click" && (
          <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
        )}
      </div>

      {/* Toggle button for click variant */}
      {variant === "click" && (
        <button
          className={`
            absolute -top-8 left-1/2 transform -translate-x-1/2
            p-1 rounded-full bg-white shadow-md hover:shadow-lg
            transition-all duration-200 hover:scale-110
            ${theme === "dark" ? "bg-gray-700" : ""}
          `}
          onClick={handlePointClick}
          aria-label={isVisible ? "Masquer détails" : "Afficher détails"}
        >
          {isVisible ? (
            <EyeOff className="w-3 h-3 text-gray-600" />
          ) : (
            <Eye className="w-3 h-3 text-gray-600" />
          )}
        </button>
      )}

      {/* Tooltip Content */}
      <div
        //  ${currentTheme.tooltip}
        className={`
          absolute -top-36 left-1/2 transform -translate-x-1/2
          ${currentSize.tooltip} p-3 rounded-xl shadow-xl
         
          bg-white border border-gray-200 text-gray-900
          dark:bg-gray-800  dark:border-gray-600 dark:text-white
          transition-all duration-300 ease-out
          ${
            shouldShowTooltip()
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible translate-y-2 scale-95 pointer-events-none"
          }
          backdrop-blur-sm border
          ${variant === "always" ? "z-50" : "z-40"}
        `}
        role="tooltip"
        aria-hidden={!shouldShowTooltip()}
      >
        {/* Arrow pointing down */}
        <div
          className={`
            absolute top-full left-1/2 transform -translate-x-1/2
            w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px]
            border-l-transparent border-r-transparent
            ${theme === "light" ? "border-t-white" : ""}
            ${theme === "dark" ? "border-t-gray-800" : ""}
            ${theme === "colored" ? "border-t-orange-500" : ""}
          `}
        />

        {/* Image */}
        <div className="relative mb-3 overflow-hidden rounded-lg">
          <img
            src={img}
            alt={text}
            className={`w-full ${currentSize.image} object-cover transition-transform duration-300 hover:scale-105`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Price */}
        {/* ${currentTheme.price} */}
        <div
          className={`font-bold ${currentSize.price} text-blue-600 dark:text-blue-400 mb-1 text-center`}
        >
          {price}
        </div>

        {/* Description */}
        {/* ${currentTheme.text}  */}
        <div className={`${currentSize.text} text-gray-600 dark:text-gray-300 text-center leading-tight`}>
          {text}
        </div>

        {/* Interactive elements for different variants */}
        {variant === "click" && (
          <div className="mt-2 pt-2 border-t border-current border-opacity-20">
            <div className="flex justify-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  isVisible ? "bg-current" : "bg-current opacity-50"
                }`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Hover indicator ring */}
      {variant === "hover" && (
        <div
          className={`
            absolute inset-0 rounded-full border-2 border-current opacity-0
            transition-all duration-300 ease-out pointer-events-none
            ${isHovered ? "opacity-30 scale-150" : "scale-100"}
          `}
        />
      )}

      {/* Always visible label for accessibility */}
      {variant === "always" && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div
            className={`text-xs px-2 py-1 rounded-full ${currentTheme.tooltip} ${currentTheme.text}`}
          >
            {text.split(" ").slice(0, 2).join(" ")}
          </div>
        </div>
      )}
    </div>
  );
};

export default TooltipPoint;
