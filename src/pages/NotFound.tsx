import { Link } from "react-router-dom";
import { Kayak, Code, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
   const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-50">
      <div className="text-center space-y-6">
        {/* Titre principal */}
        <h1 className="text-7xl font-extrabold text-blue-500">404</h1>

        {/* Illustration symbolique */}
        <div className="flex justify-center gap-6 text-blue-400">
          <Kayak size={64} />
          <Code size={64} />
        </div>

        {/* Texte d’accroche */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          {t('NotFound.oups')}
          <br />
        </p>

        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-600 transition"
        >
          <Home size={20} />
          {t('NotFound.retour')}
        </Link>
      </div>
    </section>
  );
}
