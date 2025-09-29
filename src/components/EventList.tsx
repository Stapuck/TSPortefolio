import { next_date, type EventType } from "../medias/databases/index-global.ts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Plane,
  X,
  ChevronDown,
  ExternalLink,
  Play,
  Filter,
} from "lucide-react";

const EventList = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalFilter, setModalFilter] = useState<string>("sport");
  const initialLang = document.documentElement.lang || "fr";

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const today = new Date();
  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

  const upcomingEvents = next_date.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today && eventDate <= oneYearFromToday;
  });

  // Event categories with enhanced styling
  const eventCategories = [
    {
      id: "national",
      title: t("EventList.nationalrace"),
      events: upcomingEvents.filter((e) => e.type_event_en === "national"),
      icon: Trophy,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "worldcup",
      title: t("EventList.worldcup"),
      events: upcomingEvents.filter((e) => e.type_event_en === "worldcup"),
      icon: Trophy,
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "worldchamp",
      title: t("EventList.worldchampionship"),
      events: upcomingEvents.filter((e) => e.type_event_en === "worldchamp"),
      icon: Trophy,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "training",
      title: t("EventList.trainingcamp"),
      events: upcomingEvents.filter((e) => e.type_event_en === "training"),
      icon: Users,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "pro",
      title: t("EventList.pro&other"),
      events: upcomingEvents.filter(
        (e) => e.type === "pro" || e.type === "other"
      ),
      icon: Plane,
      color: "gray",
      gradient: "from-gray-500 to-gray-600",
    },
  ];

  // Modal data preparation
  const allEventsSorted = [...next_date].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const groupByYear: Record<number, EventType[]> = allEventsSorted.reduce(
    (acc, event) => {
      const y = new Date(event.date).getFullYear();
      if (!acc[y]) acc[y] = [];
      acc[y].push(event);
      return acc;
    },
    {} as Record<number, EventType[]>
  );

  const sortYearBucket = (events: EventType[]) => {
    return [...events].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  const renderEventCard = (event: EventType, index: number) => (
    <div
      key={index}
      className="bg-white dark:bg-sky-800/70 rounded-xl p-4 border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-slate-400" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {new Date(event.date).toLocaleDateString()}
          </span>
        </div>
        {event.type && (
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-full">
            {event.type}
          </span>
        )}
      </div>

      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
        {initialLang === "fr" ? event.event_fr : event.event_en}
      </h4>

      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-slate-400 mb-3">
        <MapPin className="w-3 h-3" />
        <span>{initialLang === "fr" ? event.lieu_fr : event.lieu_en}</span>
      </div>

      {(event.link_result || event.link_video) && (
        <div className="flex space-x-2 pt-2 border-t border-gray-100 dark:border-slate-700">
          {event.link_result && (
            <a
              href={event.link_result}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{t("EventList.result")}</span>
            </a>
          )}
          {event.link_video && (
            <a
              href={event.link_video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors"
            >
              <Play className="w-3 h-3" />
              <span>{t("EventList.video")}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  // modal responsiv

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    { value: "all", label: t("EventList.all") || "Tous" },
    { value: "sport", label: t("EventList.sport") || "Sport" },
    { value: "pro", label: t("EventList.pro") || "Pro" },
  ];

  const getCurrentFilterLabel = () => {
    const current = filterOptions.find(
      (option) => option.value === modalFilter
    );
    return current ? current.label : filterOptions[0].label;
  };

  return (
    <section className="py-4 px-6  transition-colors duration-300 rounded-3xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-slate-300 mb-6 transition-colors duration-300">
            {upcomingEvents.length > 1
              ? `${upcomingEvents.length} ${t("Sport.incommingeventyears")}`
              : upcomingEvents.length === 1
              ? `${upcomingEvents.length} ${t("Sport.incommingeventyear")}`
              : t("Sport.noincommingeventyear")}
          </p>
        </div>

        {/* Event Categories */}
        <div className="space-y-4">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            const hasEvents = category.events.length > 0;

            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg dark:shadow-slate-900/50 dark:hover:shadow-slate-900/70 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => hasEvents && toggleMenu(category.id)}
                  disabled={!hasEvents}
                  className={`w-full p-6 text-left transition-all duration-300 ${
                    hasEvents
                      ? "hover:bg-gray-50 dark:hover:bg-sky-600/70 cursor-pointer"
                      : "cursor-not-allowed opacity-60 bg-gray-50 dark:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors duration-300">
                          {hasEvents
                            ? `${category.events.length} ${t(
                                "EventList.event"
                              )}${category.events.length > 1 ? "s" : ""}`
                            : t("EventList.noevent")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          hasEvents
                            ? category.color === "blue"
                              ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                              : category.color === "yellow"
                              ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300"
                              : category.color === "purple"
                              ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                              : category.color === "green"
                              ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            : "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
                        } transition-colors duration-300`}
                      >
                        {category.events.length}
                      </span>
                      {hasEvents && (
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 dark:text-slate-400 transition-all duration-200 ${
                            openMenu === category.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                {openMenu === category.id && hasEvents && (
                  <div className="px-6 pb-6 bg-gray-50 dark:bg-slate-700 transition-colors duration-300">
                    <div className="grid gap-4 pt-4">
                      {category.events.map((event, index) =>
                        renderEventCard(event, index)
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 dark:bg-blue-800 text-white font-medium rounded-xl hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg dark:shadow-slate-900/50"
          >
            <span>{t("EventList.seeall")}</span>
          </button>
        </div>

        {/* Full Screen Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-[95vw] max-w-7xl max-h-[90vh] overflow-hidden transition-colors duration-300">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <div className="flex items-center justify-between p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 truncate">
                      {t("EventList.allevents")}
                    </h2>

                    {/* Filtres desktop (cachés sur mobile) */}
                    <div className="hidden sm:flex items-center space-x-2">
                      {["all", "sport", "pro"].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setModalFilter(filter)}
                          className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                            modalFilter === filter
                              ? "bg-blue-600 dark:bg-blue-500 text-white"
                              : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                          }`}
                        >
                          {t(`EventList.${filter}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-xl transition-colors duration-300 flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Filtre mobile dropdown (visible seulement sur sm) */}
                <div className="sm:hidden px-4 pb-4">
                  <div className="relative">
                    <button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4" />
                        <span className="font-medium">
                          {getCurrentFilterLabel()}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isFilterOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isFilterOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg z-20">
                        {filterOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setModalFilter(option.value);
                              setIsFilterOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg ${
                              modalFilter === option.value
                                ? "bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium"
                                : "text-gray-700 dark:text-slate-300"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)] sm:max-h-[calc(90vh-80px)] p-4 sm:p-6">
                {Object.keys(groupByYear)
                  .sort((a, b) => Number(b) - Number(a))
                  .map((yearKey) => {
                    const year = Number(yearKey);
                    let rows = sortYearBucket(groupByYear[year]);

                    if (modalFilter === "pro") {
                      rows = rows.filter((e) => e.type === "pro");
                    } else if (modalFilter === "sport") {
                      rows = rows.filter((e) => e.type !== "pro");
                    }

                    if (rows.length === 0) return null;

                    return (
                      <div key={year} className="mb-8 sm:mb-12">
                        {/* En-tête de l'année */}
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                            {year}
                          </h3>
                          <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600 transition-colors duration-300" />
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium transition-colors duration-300">
                            {rows.length} {t("EventList.event")}
                            {rows.length > 1 ? "s" : ""}
                          </span>
                        </div>

                        {/* Vue mobile : Cards empilées (visible seulement sur sm) */}
                        <div className="space-y-3 sm:hidden">
                          {rows.map((event, idx) => {
                            const isPast = new Date(event.date) < today;
                            return (
                              <div
                                key={`${year}-${idx}`}
                                className={`bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-gray-100 dark:border-slate-600 p-4 transition-colors duration-300 ${
                                  isPast ? "opacity-60" : ""
                                }`}
                              >
                                {/* Date et type */}
                                <div className="flex justify-between items-start mb-3">
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {new Date(event.date).toLocaleDateString()}
                                  </div>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                                      event.type === "pro"
                                        ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                                        : "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                                    }`}
                                  >
                                    {initialLang === "fr"
                                      ? event.type_event_fr
                                      : event.type_event_en || "-"}
                                  </span>
                                </div>

                                {/* Événement */}
                                <div className="mb-3">
                                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                    {initialLang === "fr"
                                      ? event.event_fr
                                      : event.event_en || "-"}
                                  </h4>
                                </div>

                                {/* Lieu */}
                                <div className="flex items-center space-x-2 mb-3">
                                  <MapPin className="w-3 h-3 text-gray-400 dark:text-slate-400 flex-shrink-0" />
                                  <span className="text-xs text-gray-600 dark:text-slate-400 truncate">
                                    {initialLang === "fr"
                                      ? event.lieu_fr
                                      : event.lieu_en || "-"}
                                  </span>
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-2">
                                  {event.link_result && (
                                    <a
                                      href={event.link_result}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors duration-300"
                                    >
                                      <ExternalLink className="w-3 h-3" />
                                      <span>{t("EventList.result")}</span>
                                    </a>
                                  )}
                                  {event.link_video && (
                                    <a
                                      href={event.link_video}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-lg transition-colors duration-300"
                                    >
                                      <Play className="w-3 h-3" />
                                      <span>{t("EventList.video")}</span>
                                    </a>
                                  )}
                                  {!event.link_result && !event.link_video && (
                                    <div className="flex-1 text-center text-xs text-gray-400 dark:text-slate-500 py-2">
                                      {t("EventList.no_actions") ||
                                        "Aucune action"}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Vue tablette/desktop : Tableau (caché sur mobile) */}
                        <div className="hidden sm:block bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-600 overflow-hidden transition-colors duration-300">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 dark:bg-slate-600 border-b border-gray-100 dark:border-slate-500 transition-colors duration-300">
                                <tr>
                                  <th className="text-left p-3 sm:p-4 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                    {t("EventList.date")}
                                  </th>
                                  <th className="text-left p-3 sm:p-4 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                    {t("EventList.event_type")}
                                  </th>
                                  <th className="text-left p-3 sm:p-4 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                    {t("EventList.place")}
                                  </th>
                                  <th className="text-left p-3 sm:p-4 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                    {t("EventList.type")}
                                  </th>
                                  <th className="text-center p-3 sm:p-4 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {rows.map((event, idx) => {
                                  const isPast = new Date(event.date) < today;
                                  return (
                                    <tr
                                      key={`${year}-${idx}`}
                                      className={`border-b border-gray-50 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300 ${
                                        isPast ? "opacity-60" : ""
                                      }`}
                                    >
                                      <td className="p-3 sm:p-4 whitespace-nowrap font-medium text-gray-900 dark:text-white transition-colors duration-300">
                                        {new Date(
                                          event.date
                                        ).toLocaleDateString()}
                                      </td>
                                      <td className="p-3 sm:p-4">
                                        <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                                          {initialLang === "fr"
                                            ? event.event_fr
                                            : event.event_en || "-"}
                                        </span>
                                      </td>
                                      <td className="p-3 sm:p-4">
                                        <div className="flex items-center space-x-2">
                                          <MapPin className="w-3 h-3 text-gray-400 dark:text-slate-400" />
                                          <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                                            {initialLang === "fr"
                                              ? event.lieu_fr
                                              : event.lieu_en || "-"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="p-3 sm:p-4">
                                        <span
                                          className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                                            event.type === "pro"
                                              ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                                              : "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                                          }`}
                                        >
                                          {initialLang === "fr"
                                            ? event.type_event_fr
                                            : event.type_event_en || "-"}
                                        </span>
                                      </td>
                                      <td className="p-3 sm:p-4">
                                        <div className="flex justify-center space-x-2">
                                          {event.link_result && (
                                            <a
                                              href={event.link_result}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors duration-300"
                                            >
                                              <ExternalLink className="w-3 h-3" />
                                              <span>
                                                {t("EventList.result")}
                                              </span>
                                            </a>
                                          )}
                                          {event.link_video && (
                                            <a
                                              href={event.link_video}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors duration-300"
                                            >
                                              <Play className="w-3 h-3" />
                                              <span>
                                                {t("EventList.video")}
                                              </span>
                                            </a>
                                          )}
                                          {!event.link_result &&
                                            !event.link_video && (
                                              <span className="text-xs text-gray-400 dark:text-slate-500 transition-colors duration-300">
                                                -
                                              </span>
                                            )}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventList;
