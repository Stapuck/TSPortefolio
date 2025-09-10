import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

// Importe tes fichiers PDF
import pdfCV_FR from "../medias/pdfs/TS_CV_FR.pdf";
import pdfCV_EN from "../medias/pdfs/TS_CV_EN.pdf";


//todo mettre les vrais pdfs quand ready ! 
import pdfBudget_FR from "../medias/pdfs/Receipt_1068-175-144-en.pdf";
import pdfBudget_EN from "../medias/pdfs/Terence_Saramandif_Flight_Pula-en.pdf";
import pdfSponsor_FR from "../medias/pdfs/Standard_OffIcial_FR.pdf";
import pdfSponsor_EN from "../medias/pdfs/racun-en.pdf";

// import pdfBudget_FR from "../medias/pdfs/Budget_FR.pdf";
// import pdfBudget_EN from "../medias/pdfs/Budget_EN.pdf";

// import pdfSponsor_FR from "../medias/pdfs/Sponsor_FR.pdf";
// import pdfSponsor_EN from "../medias/pdfs/Sponsor_EN.pdf";


interface DownloadButtonProps {
  fileChoice: "CV" | "Budget" | "Sponsor";
}
// todo : revoir la langue au refresh ?? je sais pas pourquoi ça ne fonctionne pas.

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileChoice }) => {
  const [lang, setLang] = useState<string>("fr"); // Par défaut français

  useEffect(() => {
    // Initialisation avec la langue actuelle
    setLang(document.documentElement.lang || "fr");

    // Observer les changements de langue
    const observer = new MutationObserver(() => {
      const newLang = document.documentElement.lang || "fr";
      setLang(newLang);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
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

    const link = document.createElement("a");
    link.href = fileToDownload;
    link.download = fileToDownload.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleDownload}
      className="relative inline-flex items-center justify-center w-10 h-10 cursor-pointer group"
    >
      {/* Cercle gris qui apparaît au hover */}
      <div className="absolute w-12 h-12 rounded-full bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Icône Download */}
      <Download
        className="relative text-gray-800 group-hover:text-blue-600 transition-colors"
        size={32}
      />

      {/* Tooltip */}
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 text-xs rounded bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {/* <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs rounded bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"> */}
        Télécharger 

        {fileChoice === "CV" ? " CV ": ""}
        {fileChoice === "Budget" ? " Budget ": ""}
        {fileChoice === "Sponsor" ? " Sponsor ": ""}
      </span>
    </div>
  );
};

export default DownloadButton;
