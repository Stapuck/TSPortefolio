import React, { useEffect, useState } from "react";
import { Download, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import des PDF
import pdfCV_FR from "../medias/pdfs/TS_CV_FR.pdf";
import pdfCV_EN from "../medias/pdfs/TS_CV_EN.pdf";
import pdfBudget_FR from "../medias/pdfs/Receipt_1068-175-144-en.pdf";
import pdfBudget_EN from "../medias/pdfs/Terence_Saramandif_Flight_Pula-en.pdf";
import pdfSponsor_FR from "../medias/pdfs/Standard_OffIcial_FR.pdf";
import pdfSponsor_EN from "../medias/pdfs/racun-en.pdf";

export interface DownloadButtonProps {
  fileChoice: "CV" | "Budget" | "Sponsor";
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileChoice,
  title,
  description,
  icon,
  variant = "primary",
}) => {
  const [lang, setLang] = useState("fr");
  const [isDownloading, setIsDownloading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setLang(document.documentElement.lang || "fr");
    const observer = new MutationObserver(() => {
      setLang(document.documentElement.lang || "fr");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);

    let fileToDownload: string;
    switch (fileChoice) {
      case "CV":
        fileToDownload = lang === "en" ? pdfCV_EN : pdfCV_FR;
        break;
      case "Budget":
        fileToDownload = lang === "en" ? pdfBudget_EN : pdfBudget_FR;
        break;
      case "Sponsor":
        fileToDownload = lang === "en" ? pdfSponsor_EN : pdfSponsor_FR;
        break;
      default:
        fileToDownload = lang === "en" ? pdfCV_EN : pdfCV_FR;
    }

    try {
      const link = document.createElement("a");
      link.href = fileToDownload;
      link.download = fileToDownload.split("/").pop() || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setIsDownloading(false), 1000);
    } catch (e) {
      console.error("Erreur téléchargement:", e);
      setIsDownloading(false);
    }
  };

  const baseClasses =
    "group relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg border transition-all duration-300 cursor-pointer overflow-hidden";

  const variantClasses = {
    primary:
      "bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-105 dark:bg-sky-900 dark:border-sky-800",
    secondary:
      "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:border-blue-300 hover:shadow-xl hover:scale-105 dark:from-sky-700 dark:to-sky-800 dark:border-blue-700",
  };

  // todo : revoir darkmode
  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} min-w-[160px] max-w-[200px] relative group`}
    >
      {/* Surbrillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-20 dark:via-gray-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

      {/* Icone */}
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-700 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-600 dark:group-hover:to-purple-600 transition-all duration-300">
          {icon || (
            <FileText className="w-8 h-8 text-blue-600 dark:text-white" />
          )}
        </div>
      </div>

      {/* Texte */}
      <div className="text-center space-y-2">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight px-2">
            {description}
          </p>
        )}
      </div>

      {/* Bouton */}
      <div className="mt-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
        >
          {isDownloading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{t("DownloadBtn.downloading")}</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>{t("DownloadBtn.download")}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DownloadButton;
