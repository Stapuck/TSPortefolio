// import { next_date, type EventType } from "../medias/databases/index-global.ts";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// const EventList = () => {
//   const { t } = useTranslation();
//   const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (menu: any) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };
//   const [showModal, setShowModal] = useState(false);
//   const [modalFilter, setModalFilter] = useState<"all" | "pro" | "sport">(
//     "sport"
//   );

//   // Filtrer uniquement les événements sport à venir
//   const today = new Date();

//   const upcomingEvents = next_date.filter((event) => {
//     const eventDate = new Date(event.date);
//     const oneYearFromToday = new Date();
//     oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

//     return eventDate >= today && eventDate <= oneYearFromToday;
//   });

//   // Trier les événements par type
//   const nationalEvents = upcomingEvents.filter(
//     (e) => e.type_event_en === "national"
//   );
//   const worldCupEvents = upcomingEvents.filter(
//     (e) => e.type_event_en === "worldcup"
//   );
//   const worldChampEvents = upcomingEvents.filter(
//     (e) => e.type_event_en === "worldchamp"
//   );
//   const trainingCamp = upcomingEvents.filter(
//     (e) => e.type_event_en === "training"
//   );
//   const eventPro = upcomingEvents.filter((e) => e.type === "pro");

//   // --- Modal helpers (sans casser le reste) ---

//   const allEventsSorted = [...next_date].sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );

//   const groupByYear: Record<number, EventType[]> = allEventsSorted.reduce(
//     (acc, event) => {
//       const y = new Date(event.date).getFullYear();
//       if (!acc[y]) acc[y] = [];
//       acc[y].push(event);
//       return acc;
//     },
//     {} as Record<number, EventType[]>
//   );

//   const sortYearBucket = (events: EventType[]) => {
//     return [...events].sort(
//       (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//     );
//   };

//   // Fonction pour afficher la liste d'événements
//   const renderEvents = (events: EventType[]) => (
//     <ul className="p-3 space-y-2 bg-gray-50">
//       {events.map((e, index) => (
//         <li key={index}>
//           {new Date(e.date).toLocaleDateString()} - {e.event_en}, {e.lieu_en}
//           {e.type === "pro" ? ` (${e.type_event_en || "no event"})` : ` `}
//         </li>
//       ))}
//     </ul>
//   );
//   return (
//     <div className="space-y-4 text-gray-700">
//       <p className="text-center font-medium text-gray-600">
//         {upcomingEvents.length > 1
//           ? `${upcomingEvents.length} ${t("Sport.incommingeventyears")}  `
//           : `${upcomingEvents.length} ${t("Sport.incommingeventyear")}`}
//         {upcomingEvents.length === 0 ?  t("Sport.noincommingeventyear") : ""}
//       </p>

//       {/* Course Nationale */}
//       <div className="border rounded-lg shadow">
//         <button
//           onClick={() => {
//             if (nationalEvents.length > 0) toggleMenu("national");
//           }}
//           disabled={nationalEvents.length === 0}
//           className={`w-full flex justify-between items-center p-3 font-semibold
//                     ${
//                       nationalEvents.length === 0
//                         ? "cursor-not-allowed text-gray-400 bg-gray-100"
//                         : "hover:bg-gray-200"
//                     }`}
//         >
//           <span> {t("EventList.nationalrace")}</span>
//           <span
//             className={`text-xs font-bold px-2 py-1 rounded-full ${
//               nationalEvents.length === 0
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-500 text-white"
//             }`}
//           >
//             {nationalEvents.length}
//           </span>
//         </button>
//         {openMenu === "national" && renderEvents(nationalEvents)}
//       </div>

//       {/* Coupe du Monde */}
//       <div className="border rounded-lg shadow">
//         <button
//           onClick={() => {
//             if (worldCupEvents.length > 0) toggleMenu("coupe");
//           }}
//           disabled={worldCupEvents.length === 0}
//           className={`w-full flex justify-between items-center p-3 font-semibold
//                     ${
//                       worldCupEvents.length === 0
//                         ? "cursor-not-allowed text-gray-400 bg-gray-100"
//                         : "hover:bg-gray-200"
//                     }`}
//         >
//           <span>{t("EventList.worldcup")}</span>
//           <span
//             className={`text-xs font-bold px-2 py-1 rounded-full ${
//               worldCupEvents.length === 0
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-500 text-white"
//             }`}
//           >
//             {worldCupEvents.length}
//           </span>
//         </button>
//         {openMenu === "coupe" && renderEvents(worldCupEvents)}
//       </div>

//       {/* Championnat du Monde */}
//       <div className="border rounded-lg shadow">
//         <button
//           onClick={() => {
//             if (worldChampEvents.length > 0) toggleMenu("championnat");
//           }}
//           disabled={worldChampEvents.length === 0}
//           className={`w-full flex justify-between items-center p-3 font-semibold
//                     ${
//                       worldChampEvents.length === 0
//                         ? "cursor-not-allowed text-gray-400 bg-gray-100"
//                         : "hover:bg-gray-200"
//                       // ? "hidden"  : "block"
//                     }`}
//         >
//           <span>{t("EventList.worldchampionship")}</span>
//           <span
//             className={`text-xs font-bold px-2 py-1 rounded-full ${
//               worldChampEvents.length === 0
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-500 text-white"
//             }`}
//           >
//             {worldChampEvents.length}
//           </span>
//         </button>
//         {openMenu === "championnat" && renderEvents(worldChampEvents)}
//       </div>

//       {/* Stage */}
//       <div className="border rounded-lg shadow">
//         <button
//           onClick={() => {
//             if (trainingCamp.length > 0) toggleMenu("training");
//           }}
//           disabled={trainingCamp.length === 0}
//           className={`w-full flex justify-between items-center p-3 font-semibold
//                     ${
//                       trainingCamp.length === 0
//                         ? "cursor-not-allowed text-gray-400 bg-gray-100"
//                         : "hover:bg-gray-200"
//                     }`}
//         >
//           <span>{t("EventList.trainingcamp")}</span>
//           <span
//             className={`text-xs font-bold px-2 py-1 rounded-full ${
//               trainingCamp.length === 0
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-500 text-white"
//             }`}
//           >
//             {trainingCamp.length}
//           </span>
//         </button>
//         {openMenu === "training" && renderEvents(trainingCamp)}
//       </div>

//       {/* Evenement Pro */}
//       <div className="border rounded-lg shadow">
//         <button
//           onClick={() => {
//             if (eventPro.length > 0) toggleMenu("pro");
//           }}
//           disabled={eventPro.length === 0}
//           className={`w-full flex justify-between items-center p-3 font-semibold
//                     ${
//                       eventPro.length === 0
//                         ? "cursor-not-allowed text-gray-400 bg-gray-100"
//                         : "hover:bg-gray-200"
//                     }`}
//         >
//           <span>{t("EventList.pro&other")} </span>
//           <span
//             className={`text-xs font-bold px-2 py-1 rounded-full ${
//               eventPro.length === 0
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-500 text-white"
//             }`}
//           >
//             {eventPro.length}
//           </span>
//         </button>
//         {openMenu === "pro" && renderEvents(eventPro)}
//       </div>

//       {/* See all -> ouvre la modal */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => setShowModal(true)}
//           className="text-blue-600 hover:underline"
//         >
//           {t("EventList.seeall")}

//         </button>
//       </div>
//       {/* ---- MODAL EN PLEIN ÉCRAN ---- */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
//           aria-modal="true"
//           role="dialog"
//         >
//           <div className="bg-white rounded-2xl shadow-xl w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto">
//             {/* Header */}
//             <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white/90 backdrop-blur">
//               <h2 className="text-xl md:text-2xl font-bold">
//                 {t("EventList.allevents")}

//               </h2>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setModalFilter("all")}
//                   className={`px-3 py-1 rounded-lg border text-sm font-medium ${
//                     modalFilter === "all"
//                       ? "bg-blue-600 text-white"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {t("EventList.all")}
//                 </button>
//                 <button
//                   onClick={() => setModalFilter("sport")}
//                   className={`px-3 py-1 rounded-lg border text-sm font-medium ${
//                     modalFilter === "sport"
//                       ? "bg-blue-600 text-white"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {t("EventList.sport")}
//                 </button>
//                 <button
//                   onClick={() => setModalFilter("pro")}
//                   className={`px-3 py-1 rounded-lg border text-sm font-medium ${
//                     modalFilter === "pro"
//                       ? "bg-blue-600 text-white"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {t("EventList.pro")}
//                 </button>
//               </div>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50 active:scale-[0.98] transition"
//               >
//                 {t("EventList.close")}
//               </button>
//             </div>

//             {/* Contenu groupé par année */}
//             <div className="p-4 md:p-6">
//               {Object.keys(groupByYear)
//                 .sort((a, b) => Number(b) - Number(a))
//                 .map((yearKey) => {
//                   const year = Number(yearKey);

//                   let rows = sortYearBucket(groupByYear[year]);
//                   if (modalFilter === "pro") {
//                     rows = rows.filter((e) => e.type === "pro");
//                   } else if (modalFilter === "sport") {
//                     rows = rows.filter((e) => e.type !== "pro");
//                   }

//                   if (rows.length === 0) return null;

//                   return (
//                     <div key={year} className="mb-10">
//                       <h3 className="text-lg md:text-xl font-semibold mb-3">
//                         {year}
//                       </h3>

//                       <div className="overflow-x-auto rounded-lg border">
//                         <table className="w-full text-left text-sm md:text-base">
//                           <thead className="bg-gray-100">
//                             <tr>
//                               <th className="p-2 md:p-3 border-r">
//                                 {t("EventList.date")}
//                               </th>
//                               <th className="p-2 md:p-3 border-r">
//                                 {t("EventList.place")}
//                               </th>
//                               <th className="p-2 md:p-3 border-r">
//                                 {t("EventList.event_type")}
//                               </th>
//                               <th className="p-2 md:p-3 border-r">
//                                 {t("EventList.type")}
//                               </th>
//                               <th className="p-2 md:p-3 border-r">
//                                 {t("EventList.result")}
//                               </th>
//                               <th className="p-2 md:p-3">
//                                 {t("EventList.video")}
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {rows.map((event, idx) => {
//                               const isPast = new Date(event.date) < today;
//                               return (
//                                 <tr
//                                   key={`${year}-${idx}`}
//                                   className={`border-t hover:bg-gray-50 ${
//                                     isPast ? "text-gray-400 bg-gray-50" : ""
//                                   }`}
//                                 >
//                                   <td className="p-2 md:p-3 whitespace-nowrap">
//                                     {new Date(event.date).toLocaleDateString()}
//                                   </td>
//                                   <td className="p-2 md:p-3">
//                                     {event.lieu_en ||
//                                       event.lieu_fr ||
//                                       event.event_en ||
//                                       "-"}
//                                   </td>
//                                   <td className="p-2 md:p-3 capitalize">
//                                     {event.type_event_en || "-"}
//                                     {/* todo : le faire pour tout les types. */}
//                                     {/* mettre un if type_event_en === "??" ? texte traduit (t('eeee')) : "" */}
//                                   </td>
//                                   <td className="p-2 md:p-3 capitalize">
//                                     {event.type || "-"}
//                                   </td>
//                                   <td className="p-2 md:p-3">
//                                     {event.link_result ? (
//                                       <a
//                                         href={event.link_result}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-600 hover:underline"
//                                       >
//                                         {t("EventList.result")}
//                                       </a>
//                                     ) : (
//                                       <span className="opacity-80">-</span>
//                                     )}
//                                   </td>
//                                   <td className="p-2 md:p-3">
//                                     {event.link_video ? (
//                                       <a
//                                         href={event.link_video}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-600 hover:underline"
//                                       >
//                                         {t("EventList.video")}
//                                       </a>
//                                     ) : (
//                                       <span className="opacity-60">-</span>
//                                     )}
//                                   </td>
//                                 </tr>
//                               );
//                             })}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventList;

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
} from "lucide-react";

const EventList = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalFilter, setModalFilter] = useState<"all" | "pro" | "sport">(
    "sport"
  );
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
    // todo : revoir pour mettre other en type 
    {
      id: "pro",
      title: t("EventList.pro&other"),
      events: upcomingEvents.filter((e) => e.type === "pro" || e.type === "other" ),
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
      className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-900">
            {new Date(event.date).toLocaleDateString()}
          </span>
        </div>
        {event.type && (
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            {event.type}
          </span>
        )}
      </div>

      <h4 className="font-semibold text-gray-900 mb-1">
        {initialLang === "fr" ? event.event_fr : event.event_en}
      </h4>

      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
        <MapPin className="w-3 h-3" />
        <span>{initialLang === "fr" ? event.lieu_fr : event.lieu_en}</span>
      </div>

      {(event.link_result || event.link_video) && (
        <div className="flex space-x-2 pt-2 border-t border-gray-100">
          {event.link_result && (
            <a
              href={event.link_result}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
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
              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
            >
              <Play className="w-3 h-3" />
              <span>{t("EventList.video")}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-4 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
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
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => hasEvents && toggleMenu(category.id)}
                  disabled={!hasEvents}
                  className={`w-full p-6 text-left transition-all duration-300 ${
                    hasEvents
                      ? "hover:bg-gray-50 cursor-pointer"
                      : "cursor-not-allowed opacity-60 bg-gray-50"
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
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {hasEvents
                            ? `${category.events.length} ${t('EventList.event')}${
                                category.events.length > 1 ? "s" : ""
                              }`
                            : t("EventList.noevent")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          hasEvents
                            ? `bg-${category.color}-100 text-${category.color}-700`
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {category.events.length}
                      </span>
                      {hasEvents && (
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            openMenu === category.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                {openMenu === category.id && hasEvents && (
                  <div className="px-6 pb-6 bg-gray-50">
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <span>{t("EventList.seeall")}</span>
          </button>
        </div>

        {/* Full Screen Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-[95vw] max-w-7xl max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {t("EventList.allevents")}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {["all", "sport", "pro"].map((filter) => (
                        <button
                          key={filter}
                          onClick={() =>
                            setModalFilter(filter as typeof modalFilter)
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            modalFilter === filter
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {t(`EventList.${filter}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
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
                      <div key={year} className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {year}
                          </h3>
                          <div className="flex-1 h-px bg-gray-200" />
                          <span className="text-sm text-gray-500 font-medium">
                            {rows.length} {t('EventList.event')}{rows.length > 1 ? "s" : ""}
                          </span>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                  <th className="text-left p-4 font-semibold text-gray-900">
                                    {t("EventList.date")}
                                  </th>
                                  <th className="text-left p-4 font-semibold text-gray-900">
                                    {t("EventList.event_type")}
                                  </th>
                                  <th className="text-left p-4 font-semibold text-gray-900">
                                    {t("EventList.place")}
                                  </th>
                                  <th className="text-left p-4 font-semibold text-gray-900">
                                    {t("EventList.type")}
                                  </th>
                                  <th className="text-center p-4 font-semibold text-gray-900">
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
                                      className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                                        isPast ? "opacity-60" : ""
                                      }`}
                                    >
                                      <td className="p-4 whitespace-nowrap font-medium">
                                        {new Date(
                                          event.date
                                        ).toLocaleDateString()}
                                      </td>
                                      <td className="p-4">
                                        <span className="font-medium text-gray-900">
                                          { initialLang === "fr" ? event.event_fr : event.event_en ||
                                            "-"}
                                        </span>
                                      </td>
                                      <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                          <MapPin className="w-3 h-3 text-gray-400" />
                                          <span className="text-gray-700">
                                            { initialLang === "fr" ? event.lieu_fr : event.lieu_en ||
                                            "-"}
                                          </span>
                                        </div>
                                      </td>
                                      <td className="p-4">
                                        <span
                                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            event.type === "pro"
                                              ? "bg-purple-100 text-purple-700"
                                              : "bg-blue-100 text-blue-700"
                                          }`}
                                        >
                                          { initialLang === "fr" ? event.type_event_fr : event.type_event_en ||
                                            "-"}
                                          {/* {event.type_event_en ||
                                            event.type ||
                                            "-"} */}
                                        </span>
                                      </td>
                                      <td className="p-4">
                                        <div className="flex justify-center space-x-2">
                                          {event.link_result && (
                                            <a
                                              href={event.link_result}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
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
                                              className="inline-flex items-center space-x-1 px-2 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                                            >
                                              <Play className="w-3 h-3" />
                                              <span>
                                                {t("EventList.video")}
                                              </span>
                                            </a>
                                          )}
                                          {!event.link_result &&
                                            !event.link_video && (
                                              <span className="text-xs text-gray-400">
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
