import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Eye, List } from "lucide-react";
import TooltipPoint from "../components/ToolTipPoint.tsx";

// import { photos} from "../medias/databases/index-global.ts";
// mettre dans inedx global
// mettre dans index de images aussi
import racerst from "../medias/images/budget/racerst.png";
import kayakcrossdeck from "../medias/images/budget/KayakCross_spraydeck.png";
import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
import vadjahelmet from "../medias/images/budget/vajda_helmet.png";
import k1paddle from "../medias/images/budget/k1_paddle.png";
import c1paddle from "../medias/images/budget/c1_paddle.png";
import slalomboat from "../medias/images/budget/slalom_boat.png";
import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";
import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
// import kayakCross from "../medias/images/budget/kayakcrosspic.png";
import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";

const BudgetMaterial = () => {
  const { t } = useTranslation();
  const [showDetailedView, setShowDetailedView] = useState(false);

  useEffect(() => {
    photos.forEach((photo) => {
      // Image principale
      const img = new Image();
      img.src = photo.src;

      // Tooltips
      photo.tooltips.forEach((tooltip) => {
        const tipImg = new Image();
        tipImg.src = tooltip.img;
      });
    });
  }, []);

  // mettre dans inedx global
  const photos = [
    {
      src: canoeslalom,
      alt: "Canoe Slalom",
      tooltips: [
        {
          x: "45%",
          y: "38%",
          img: vadjahelmet,
          price: 240,
          text: t("Sport.budget.helmet"),
        },

        {
          x: "50%",
          y: "60%",
          img: racerst,
          price: 320,
          text: t("Sport.budget.racerst"),
        },
        {
          x: "37%",
          y: "72%",
          img: c1paddle,
          price: 360,
          text: t("Sport.budget.c1paddle"),
        },
        {
          x: "65%",
          y: "68%",
          img: slalomboat,
          price: 2500,
          text: t("Sport.budget.slalomboat"),
        },
      ],
    },
    {
      src: kayakCross,
      alt: "Kayak Cross",
      tooltips: [
        {
          x: "53%",
          y: "39%",
          img: kayakcrosshelmet,
          price: 120,
          text: t("Sport.budget.helmet"),
        },
        {
          x: "40%",
          y: "54%",
          img: k1paddle,
          price: 500,
          text: t("Sport.budget.k1paddle"),
        },
        {
          x: "30%",
          y: "70%",
          img: kayakcrossboat,
          price: 2000,
          text: t("Sport.budget.kayakcrossboat"),
        },
        {
          x: "53%",
          y: "65%",
          img: kayakcrossdeck,
          price: 120,
          text: t("Sport.budget.kayakcrossdeck"),
        },
      ],
    },
  ];

  const totals = photos.map((p) =>
    p.tooltips.reduce((sum, item) => sum + item.price, 0)
  );

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(val);

  return (
    <section className="py-10 px-6 bg-sky-200 dark:bg-sky-900 rounded-3xl">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {t("Sport.budget.material")}
            </h3>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-4" />

            {/* Toggle Button */}
            <div className="inline-flex items-center bg-white dark:bg-sky-700/80 rounded-full p-1 shadow-md mb-2">
              <button
                onClick={() => setShowDetailedView(false)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  !showDetailedView
                    ? "bg-blue-500 text-white shadow-lg dark:bg-sky-600/80"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>{t("Sport.budget.viewtoolpoint")}</span>
              </button>
              <button
                onClick={() => setShowDetailedView(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  showDetailedView
                    ? "bg-blue-500 text-white shadow-lg dark:bg-sky-600/80"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                <List className="w-4 h-4" />
                <span>{t("Sport.budget.viewdetail")}</span>
              </button>
            </div>
          </div>

          {/* Equipment Content */}
          {!showDetailedView ? (
            <div className="grid md:grid-cols-2 gap-8">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-2xl shadow-lg bg-white dark:bg-sky-700/50 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative flex justify-center w-full">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="rounded-xl shadow-lg w-full"
                    />
                    {photo.tooltips.map((tooltip, j) => (
                      <TooltipPoint
                        key={j}
                        x={tooltip.x}
                        y={tooltip.y}
                        img={tooltip.img}
                        price={formatPrice(tooltip.price)}
                        text={tooltip.text}
                      />
                    ))}
                  </div>

                  <div className="mt-6 bg-gray-50 dark:bg-slate-800/80 text-black dark:text-slate-200 text-center p-4 rounded-xl shadow">
                    <h3 className="text-lg font-bold">{photo.alt}</h3>
                    <p className="text-2xl font-extrabold mt-2">
                      Budget : {formatPrice(totals[i])}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Detailed List View
            <div className="grid lg:grid-cols-2 gap-8">
              {photos.map((category, index) => {
                const categoryTotal = category.tooltips.reduce(
                  (sum, item) => sum + item.price,
                  0
                );

                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-sky-700/50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Category Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={category.src}
                        alt={category.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-bold">{category.alt}</h4>
                      </div>
                    </div>

                    {/* Equipment List */}
                    <div className="p-6">
                      <div className="space-y-4 mb-6">
                        {category.tooltips.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={item.img}
                                alt={item.text}
                                className="w-12 h-12 object-cover rounded-lg"
                                loading="lazy"
                              />
                              <span className="font-medium text-gray-700 dark:text-gray-200">
                                {item.text}
                              </span>
                            </div>
                            <span className="font-bold text-blue-600 dark:text-gray-100">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Category Total */}
                      <div className="bg-blue-50 dark:bg-slate-900/80 p-4 rounded-xl text-center">
                        <p className="text-sm text-blue-600 dark:text-gray-200 font-medium mb-1">
                          Budget : {category.alt}
                        </p>
                        <p className="text-2xl font-bold text-blue-700 dark:text-gray-300">
                          {formatPrice(categoryTotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BudgetMaterial;
