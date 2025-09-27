import React, { useEffect, useState } from "react";
import { Download, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import des PDF
import pdfCV_FR from "../medias/pdfs/TS_CV-FR.pdf";
import pdfCV_EN from "../medias/pdfs/TS_CV-EN.pdf";
import pdfBudget_FR from "../medias/pdfs/Receipt_1068-175-144-en.pdf";
import pdfBudget_EN from "../medias/pdfs/Terence_Saramandif_Flight_Pula-en.pdf";
import pdfSponsor_FR from "../medias/pdfs/DossierSponsoring_22092025_TSFRV3.pdf";
import pdfSponsor_EN from "../medias/pdfs/DossierSponsoring_22092025_TSENV3.pdf";

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
      "bg-white border-gray-200 hover:border-sky-300 hover:shadow-xl hover:scale-105 dark:bg-slate-800 dark:border-sky-800 dark:hover:border-sky-700 dark:shadow-sky-950/50",
    secondary:
      "bg-gradient-to-br from-gray-50 to-sky-50 border-sky-200 hover:border-sky-300 hover:shadow-xl hover:scale-105 dark:from-sky-700 dark:to-sky-800 dark:border-sky-600 dark:hover:border-sky-500 dark:shadow-sky-950/50",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} min-w-[160px] max-w-[200px] relative group`}
    >
      {/* Surbrillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 dark:via-sky-300/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

      {/* Icone */}
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-blue-400 dark:to-sky-400 rounded-xl flex items-center justify-center group-hover:from-sky-200 group-hover:to-blue-600 dark:group-hover:from-sky-600 dark:group-hover:to-sky-700 transition-all duration-300 shadow-lg dark:shadow-sky-950/50">
          {icon || (
            <FileText className="w-8 h-8 text-sky-600 dark:text-blue-100" />
          )}
        </div>
      </div>

      {/* Texte */}
      <div className="text-center space-y-2">
        <h3 className="font-bold text-gray-900 dark:text-sky-100 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-sky-300 leading-tight px-2">
            {description}
          </p>
        )}
      </div>

      {/* Bouton */}
      <div className="mt-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="px-4 py-2 bg-sky-600 dark:bg-sky-700 text-white text-sm font-medium rounded-lg hover:bg-sky-700 dark:hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2 shadow-lg dark:shadow-sky-950/50"
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