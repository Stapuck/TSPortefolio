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
      description: t("Download.cvDescription", "Mon curriculum vitae complet"),
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      variant: "primary" as const,
    },
    {
      fileChoice: "Budget" as const,
      title: "Budget",
      description: t(
        "Download.budgetDescription",
        "Détail budgétaire du projet"
      ),
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      variant: "secondary" as const,
    },
    {
      fileChoice: "Sponsor" as const,
      title: "Sponsoring",
      description: t("Download.sponsorDescription", "Dossier de sponsoring"),
      icon: <Users className="w-8 h-8 text-purple-600" />,
      variant: "primary" as const,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {t("Download.title", "Téléchargements")}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-lg mx-auto">
          {t(
            "Download.description",
            "Découvrez mes documents officiels et informations détaillées"
          )}
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

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">
              {t("DownloadBtn.noteTitle")}
            </p>
            <p className="text-blue-700">{t("DownloadBtn.noteText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
