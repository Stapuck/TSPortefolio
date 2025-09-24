import { useTranslation } from "react-i18next";
import { MapPin, Clock, Zap } from "lucide-react";

const BudgetEvent = () => {
  const { t } = useTranslation();

  //todo mettre dans index global ? si oui revoir la traduction 
// import { travelExpenses} from "../medias/databases/index-global.ts";

  const travelExpenses = [
    {
      key: "registrationfee",
      label: t("Sport.deplacement.registrationfee"),
      amount: 1130,
      tooltip: t("Sport.deplacement.registrationfeetxt"),
    },
    {
      key: "coaching",
      label: t("Sport.deplacement.coaching"),
      amount: 6420,
      tooltip: t("Sport.deplacement.coachingtxt"),
    },
    {
      key: "accommodation",
      label: t("Sport.deplacement.accomodation"),
      amount: 3150,
      tooltip: t("Sport.deplacement.accomodationtxt"),
    },
    {
      key: "food",
      label: t("Sport.deplacement.food"),
      amount: 1400,
      tooltip: t("Sport.deplacement.foodtxt"),
    },
    {
      key: "transport",
      label: t("Sport.deplacement.transport"),
      amount: 800,
      tooltip: t("Sport.deplacement.transporttxt"),
    },
    {
      key: "other",
      label: t("Sport.deplacement.other"),
      amount: 1200,
      tooltip: t("Sport.deplacement.othertxt"),
    },
    {
      key: "subscription",
      label: t("Sport.deplacement.subscription"),
      amount: 1250,
      tooltip: t("Sport.deplacement.subscriptiontxt"),
    },
    {
      key: "Daily",
      label: t("Sport.deplacement.daily"),
      amount: 10000,
      tooltip: t("Sport.deplacement.dailytxt"),
    },
  ];

  const totalTravel = travelExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(val);

  return (
    <section className="mt-2 bg-sky-200 dark:bg-sky-900 p-3 rounded-3xl">
        <div className="bg-white dark:bg-sky-800/70 rounded-3xl shadow-lg p-8">
            <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {t("Sport.budget.training&race")}
          </h3>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-300 mx-auto rounded-full" />
        </div>
          {/* Introduction */}
          <div className="bg-green-50 dark:bg-green-700/50 p-6 rounded-2xl mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {t("Sport.budget.race")}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {t("Sport.budget.training")}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {t("Sport.budget.nationale")}
                </span>
              </div>
            </div>
          </div>

          {/* Expenses Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {travelExpenses.map((expense, index) => (
              <div key={index} className="group relative">
                
                <div className="bg-gray-50 dark:bg-slate-800 dark:hover:bg-gray-800/70 p-6 rounded-2xl hover:bg-gray-100  transition-colors cursor-help">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {expense.label}
                    </h4>
                    <span className="font-bold text-green-600 dark:text-green-400 text-lg">
                      {formatPrice(expense.amount)}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-72 bg-gray-700 dark:bg-gray-900 text-white text-sm p-3 rounded-lg shadow-xl z-10">
                    {expense.tooltip}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Total */}
          <div className="mt-8 bg-green-50 dark:bg-green-700/50 p-6 rounded-xl text-center">
            <p className="text-md text-green-600 dark:text-slate-100 font-medium mb-1">
              {t("Sport.budget.training&race")}
            </p>
            <p className="text-2xl font-bold text-green-700 dark:text-slate-200">
              {formatPrice(totalTravel)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetEvent;