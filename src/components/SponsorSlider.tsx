import { useRef } from "react";
import { sponsors } from "../medias/index-global";
// import { useTranslation } from "react-i18next";

const SponsorSlider = () => {
  const sliderRef = useRef(null);
  const initialLang = localStorage.getItem("lang") || "fr";
  // const { t } = useTranslation();

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="w-full py-2 overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex gap-8 animate-scroll"
            style={{
              width: "max-content",
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
                    alt={
                      initialLang === "fr" ? sponsor.name_fr : sponsor.name_en
                    }
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* <a
            className="mt-6 pt-3 flex justify-center items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors duration-200 group"
            href="/sponsors"
          >
            {t("Sponsor.seemore")}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a> */}
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
