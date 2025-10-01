import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MapPin, Clock, Zap, PieChart, Grid3x3 } from "lucide-react";
import { travelExpenses } from "../medias/databases/index-global.ts";
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";


const BudgetEvent = () => {
  const { t } = useTranslation();
  const initialLang = document.documentElement.lang || "fr";

  const [viewMode, setViewMode] = useState("grid");

  const colors = [
    "#10b981",
    "#06b6d4",
    "#8b5cf6",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
    "#6366f1",
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

  const chartData = travelExpenses.map((expense) => ({
    name: initialLang === "fr" ? expense.label_fr : expense.label_en,
    value: expense.amount,
    tooltip: initialLang === "fr" ? expense.tooltip_fr : expense.tooltip_en,
  }));

  return (
    <section className="mt-2 bg-sky-200 dark:bg-sky-900 p-3 rounded-3xl">
      <div className="bg-white dark:bg-sky-800/70 rounded-3xl shadow-lg p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {t("Sport.budget.training&race")}
            </h3>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-300 mx-auto rounded-full" />

            {/* Bouton de basculement */}
            <button
              onClick={() =>
                setViewMode(viewMode === "grid" ? "chart" : "grid")
              }
              className="hidden mt-4 sm:flex items-center gap-2 mx-auto px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full transition-all duration-300 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md"
            >
              {viewMode === "grid" ? (
                <>
                  <PieChart className="w-4 h-4" />
                  <span> {t('Sport.budget.viewchart')}</span>
                </>
              ) : (
                <>
                  <Grid3x3 className="w-4 h-4" />
                  <span> {t('Sport.budget.viewdetail')}</span>
                </>
              )}
            </button>
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

          {/* Expenses Grid ou Chart */}
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {travelExpenses.map((expense, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-50 dark:bg-slate-800 dark:hover:bg-gray-800/70 p-6 rounded-2xl hover:bg-gray-100 transition-colors cursor-help">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {initialLang === "fr"
                          ? expense.label_fr
                          : expense.label_en}
                      </h4>
                      <span className="font-bold text-green-600 dark:text-green-400 text-lg">
                        {formatPrice(expense.amount)}
                      </span>
                    </div>
                    {/* Tooltip */}
                    {/* todo : revoir couleur et darkmode  */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-72 bg-gray-700 dark:bg-gray-900 text-white text-sm p-3 rounded-lg shadow-xl z-10">
                      {initialLang === "fr"
                        ? expense.tooltip_fr
                        : expense.tooltip_en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8">
              <ResponsiveContainer width="100%" height={400}>
                <RechartsPie>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    // todo : revoir si nom ou pas. 
                    // label={({ name, percent }: any) =>
                    label={({percent }: any) =>
                      // `${name} (${(percent * 100).toFixed(0)}%)`
                      ` (${(percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {chartData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => formatPrice(value as number)}
                    contentStyle={{
                      // backgroundColor: "rgba(240, 41, 55, 0.95)",
                      // backgroundColor: "rgba(36, 183, 194, 0.90)",
                      // backgroundColor: "rgba(66, 223, 163, 1)",
                      backgroundColor: "rgba(35, 210, 143, 1)",
                      border: "none",
                      borderRadius: "0.5rem",
                      color: "white",
                    }}
                  />
                  {/* revoir legend disposition*/}
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    height={36}
                    formatter={(value: string, _entry: any) => (
                      <span className="text-sm">
                        {value}: {formatPrice(_entry.payload.value)}
                      </span>
                    )}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          )}


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
