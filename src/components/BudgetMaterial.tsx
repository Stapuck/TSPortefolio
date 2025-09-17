import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";
import { Calculator, Plane, Receipt, MapPin, Clock, Zap, Eye, List } from "lucide-react";

import TooltipPoint from "../components/ToolTipPoint.tsx";

import racerst from "../medias/images/budget/racerst.png";
import kayakcrossdeck from "../medias/images/budget/KayakCross_spraydeck.png";
import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
import vadjahelmet from "../medias/images/budget/vajda_helmet.png";
import k1paddle from "../medias/images/budget/k1_paddle.png";
import c1paddle from "../medias/images/budget/c1_paddle.png";
import slalomboat from "../medias/images/budget/slalom_boat.png";
import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";
import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";

const BudgetMaterial = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [showDetailedView, setShowDetailedView] = useState(false);

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

  // Travel expenses data
  const travelExpenses = [
    {
      key: "registrationfee",
      label: t("Sport.deplacement.registrationfee"),
      amount: 1130,
      tooltip: t("Sport.deplacement.registrationfeetxt")
    },
    {
      key: "coaching",
      label: t("Sport.deplacement.coaching"),
      amount: 6420,
      tooltip: t('Sport.deplacement.coachingtxt')
    },
    {
      key: "accommodation",
      label: t("Sport.deplacement.accomodation"),
      amount: 3150,
      tooltip: t('Sport.deplacement.accomodationtxt')
    },
    {
      key: "food",
      label: t("Sport.deplacement.food"),
      amount: 1400,
      tooltip: t('Sport.deplacement.foodtxt')
    },
    {
      key: "transport",
      label: t("Sport.deplacement.transport"),
      amount: 800,
      tooltip: t('Sport.deplacement.transporttxt')
    },
    {
      key: "other",
      label: t("Sport.deplacement.other"),
      amount: 1200,
      tooltip: t('Sport.deplacement.othertxt')
    },
    {
      key: "subscription",
      label: t("Sport.deplacement.subscription"),
      amount: 1250,
      tooltip: t('Sport.deplacement.subscriptiontxt')
    },
    {
      key: "Daily",
      label: t("Sport.deplacement.daily"),
      amount: 10000,
      tooltip: t('Sport.deplacement.dailytxt')
    }
  ];

  // Calculate totals
  const totals = photos.map((p) =>
    p.tooltips.reduce((sum, item) => sum + item.price, 0)
  );
  const totalEquipment = totals.reduce((a, b) => a + b, 0);
  const totalTravel = travelExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const globalTotal = totalEquipment + totalTravel;

  // Count up animations
  const equipmentCount = useCountUp(inView ? totalEquipment : 0);
  const travelCount = useCountUp(inView ? totalTravel : 0);
  const totalCount = useCountUp(inView ? globalTotal : 0);

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(val);

  return (
    <section className="py-16 px-6 bg-gray-50 rounded-3xl">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("Sport.budget.seasonbudget")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('Sport.budget.intro')}
          </p>
        </div>

        {/* Equipment Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("Sport.budget.material")}
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            
            {/* Toggle Button */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md mb-8">
              <button
                onClick={() => setShowDetailedView(false)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  !showDetailedView 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>{t('Sport.budget.viewdetail')}</span>
              </button>
              <button
                onClick={() => setShowDetailedView(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  showDetailedView 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <List className="w-4 h-4" />
                <span>{t('Sport.budget.viewtoolpoint')}</span>
              </button>
            </div>
          </div>

          {/* Equipment Content */}
          {!showDetailedView ? (
            // Original Tooltip View
            <div className="grid md:grid-cols-2 gap-8">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-2xl shadow-lg bg-white flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
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

                  <div className="mt-6 bg-gray-50 text-black text-center p-4 rounded-xl shadow">
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
                const categoryTotal = category.tooltips.reduce((sum, item) => sum + item.price, 0);
                
                return (
                  <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
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
                          <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="flex items-center space-x-3">
                              <img
                                src={item.img}
                                alt={item.text}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <span className="font-medium text-gray-700">{item.text}</span>
                            </div>
                            <span className="font-bold text-blue-600">{formatPrice(item.price)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Category Total */}
                      <div className="bg-blue-50 p-4 rounded-xl text-center">
                        <p className="text-sm text-blue-600 font-medium mb-1">Budget : {category.alt}</p>
                        <p className="text-2xl font-bold text-blue-700">{formatPrice(categoryTotal)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Travel & Training Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {t("Sport.budget.training&race")}
            </h3>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            {/* Introduction */}
            <div className="bg-green-50 p-6 rounded-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{t('Sport.budget.race')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{t('Sport.budget.training')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{t('Sport.budget.nationale')}</span>
                </div>
              </div>
            </div>

            {/* Expenses Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {travelExpenses.map((expense, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors cursor-help">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800">{expense.label}</h4>
                      <span className="font-bold text-green-600 text-lg">{formatPrice(expense.amount)}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-72 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-xl z-10">
                      {expense.tooltip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Total */}
            <div className="mt-8 bg-green-50 p-6 rounded-xl text-center">
              <p className="text-sm text-green-600 font-medium mb-1">
                {t("Sport.budget.training&race")}
              </p>
              <p className="text-2xl font-bold text-green-700">{formatPrice(totalTravel)}</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div ref={ref} className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {t("Sport.budget.sum&info")}
            </h3>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t("Sport.budget.equippement")}
              </h4>
              <p className="text-3xl font-bold text-blue-600">{formatPrice(equipmentCount)}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t("Sport.budget.travel")}
              </h4>
              <p className="text-3xl font-bold text-green-600">{formatPrice(travelCount)}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibent text-gray-800 mb-2">
                {t("Sport.budget.totalglo")}
              </h4>
              <p className="text-3xl font-bold text-purple-600">{formatPrice(totalCount)}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Receipt className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-2">{t('Sport.budget.budgetreality')}:</p>
                <p className="mb-2">
                  {t('Sport.budget.budgetrealitytxt1')}
                </p>
                <p>
                  {t('Sport.budget.budgetrealitytxt2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetMaterial;