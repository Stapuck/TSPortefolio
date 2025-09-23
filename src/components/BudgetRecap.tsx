import { Calculator, Plane, Receipt } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";
// import { photos, travelExenses } from "../medias/databases/index-global.ts";

const BudgetRecap = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });


//   temp data - to move to db later
//  same but no photo 
    const photos = [  
    {
      alt: "Canoe Slalom",
      tooltips: [
        {
          x: "45%",
          y: "38%",
          price: 240,
          text: t("Sport.budget.helmet"),
        },
        
         {
          x: "50%",
          y: "60%",
          price: 320,
          text: t("Sport.budget.racerst"),
        },
        {
          x: "37%",
          y: "72%",
          price: 360,
          text: t("Sport.budget.c1paddle"),
        },
        {
          x: "65%",
          y: "68%",
          price: 2500,
          text: t("Sport.budget.slalomboat"),
        },
       
      ],
    },
    {
      alt: "Kayak Cross",
      tooltips: [
        {
          x: "53%",
          y: "39%",
          price: 120,
          text: t("Sport.budget.helmet"),
        },
        {
          x: "40%",
          y: "54%",
          price: 500,
          text: t("Sport.budget.k1paddle"),
        },
        {
          x: "30%",
          y: "70%",
          price: 2000,
          text: t("Sport.budget.kayakcrossboat"),
        },
        {
          x: "53%",
          y: "65%",
          price: 120,
          text: t("Sport.budget.kayakcrossdeck"),
        },
      ],
    },
  ];

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
    <section className="mt-2 p-4 bg-gray-200 rounded-3xl">
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
            <p className="text-3xl font-bold text-blue-600">
              {formatPrice(equipmentCount)}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Plane className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {t("Sport.budget.travel")}
            </h4>
            <p className="text-3xl font-bold text-green-600">
              {formatPrice(travelCount)}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Receipt className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibent text-gray-800 mb-2">
              {t("Sport.budget.totalglo")}
            </h4>
            <p className="text-3xl font-bold text-purple-600">
              {formatPrice(totalCount)}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Receipt className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-2">
                {t("Sport.budget.budgetreality")}:
              </p>
              <p className="mb-2">{t("Sport.budget.budgetrealitytxt1")}</p>
              <p>{t("Sport.budget.budgetrealitytxt2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetRecap;
