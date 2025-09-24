import React from "react";
import { FileText, DollarSign, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import DownloadButton from "../components/DownloadBtn";

const DownloadSection: React.FC = () => {
  const { t } = useTranslation();

  const downloadItems = [
    {
      fileChoice: "CV" as const,
      title: "CV",
      description: t("DownloadBtn.cvdescription"),
      icon: <FileText className="w-8 h-8 text-blue-600 dark:text-white" />,
      variant: "primary" as const,
    },
    {
      fileChoice: "Budget" as const,
      title: "Budget",
      description: t("DownloadBtn.budgetdescription"),
      icon: <DollarSign className="w-8 h-8 text-green-600 dark:text-white" />,
      variant: "primary" as const,
    },
    {
      fileChoice: "Sponsor" as const,
      title: "Sponsoring",
      description: t("DownloadBtn.sponsordescription"),
      icon: <Users className="w-8 h-8 text-purple-600 dark:text-white" />,
      variant: "primary" as const,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto p-4 rounded-3xl">
      <div className="mb-8 text-center">
        <p className="text-gray-600 dark:text-gray-200 max-w-lg mx-auto">
          {t("DownloadBtn.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {downloadItems.map((item) => (
          <DownloadButton
            key={item.fileChoice}
            fileChoice={item.fileChoice}
            title={item.title}
            description={item.description}
            icon={item.icon}
            variant={item.variant}
          />
        ))}
      </div>

      {/* Note Section */}
      <div
        className="mt-8 p-4 
            bg-blue-50 dark:bg-sky-700/50  
            border border-blue-200 dark:border-slate-700 
            rounded-xl transition-colors duration-300 shadow-lg"
      >
        <div className="flex items-start space-x-3">
          <div
            className="w-5 h-5 bg-blue-600 dark:bg-blue-500 
                    rounded-full flex items-center justify-center 
                    flex-shrink-0 mt-0.5 transition-colors duration-300"
          >
            <span className="text-white text-xs font-bold">i</span>
          </div>

          <div className="text-sm text-blue-800 dark:text-slate-200 transition-colors duration-300">
            <p className="font-medium mb-1">{t("DownloadBtn.noteTitle")}</p>
            <p className="text-blue-700 dark:text-slate-300">
              {t("DownloadBtn.noteText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
