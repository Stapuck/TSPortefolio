import { next_date, type EventType } from "../medias/databases/index-global.ts";
import { useState } from "react";

const EventList = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu: any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  const [showModal, setShowModal] = useState(false);
  const [modalFilter, setModalFilter] = useState<"all" | "pro" | "sport">(
    "sport"
  );

  // Filtrer uniquement les événements sport à venir
  const today = new Date();

  const upcomingEvents = next_date.filter((event) => {
    const eventDate = new Date(event.date);
    const oneYearFromToday = new Date();
    oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

    return eventDate >= today && eventDate <= oneYearFromToday;
  });

  // Trier les événements par type
  const nationalEvents = upcomingEvents.filter(
    (e) => e.type_event === "national"
  );
  const worldCupEvents = upcomingEvents.filter(
    (e) => e.type_event === "worldcup"
  );
  const worldChampEvents = upcomingEvents.filter(
    (e) => e.type_event === "worldchamp"
  );
  const trainingCamp = upcomingEvents.filter(
    (e) => e.type_event === "training"
  );
  const eventPro = upcomingEvents.filter((e) => e.type === "pro");

  // --- Modal helpers (sans casser le reste) ---

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

  // Fonction pour afficher la liste d'événements
  const renderEvents = (events: EventType[]) => (
    <ul className="p-3 space-y-2 bg-gray-50">
      {events.map((e, index) => (
        <li key={index}>
          {new Date(e.date).toLocaleDateString()} - {e.event_en}, {e.lieu_en}
          {e.type === "pro" ? ` (${e.type_event || "no event"})` : ` `}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="space-y-4 text-gray-700">
      {/* todo : revoir pour le cursor si pas de course */}

      <p className="text-center font-medium text-gray-600">
        {upcomingEvents.length > 1
          ? `${upcomingEvents.length} événements à venir 🚀 dans l'année `
          : `${upcomingEvents.length} événement à venir 🚀 dans l'année `}
        {upcomingEvents.length === 0 ? "Pas d'evenement à venir " : ""}
      </p>

      {/* Course Nationale */}
      <div className="border rounded-lg shadow">
        <button
          onClick={() => {
            if (nationalEvents.length > 0) toggleMenu("national");
          }}
          disabled={nationalEvents.length === 0}
          className={`w-full flex justify-between items-center p-3 font-semibold 
                    ${
                      nationalEvents.length === 0
                        ? "cursor-not-allowed text-gray-400 bg-gray-100"
                        : "hover:bg-gray-200"
                    }`}
        >
          <span>Course Nationale</span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              nationalEvents.length === 0
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {nationalEvents.length}
          </span>
        </button>
        {openMenu === "national" && renderEvents(nationalEvents)}
      </div>

      {/* Coupe du Monde */}
      <div className="border rounded-lg shadow">
        <button
          onClick={() => {
            if (worldCupEvents.length > 0) toggleMenu("coupe");
          }}
          disabled={worldCupEvents.length === 0}
          className={`w-full flex justify-between items-center p-3 font-semibold 
                    ${
                      worldCupEvents.length === 0
                        ? "cursor-not-allowed text-gray-400 bg-gray-100"
                        : "hover:bg-gray-200"
                    }`}
        >
          <span>Coupe du monde</span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              worldCupEvents.length === 0
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {worldCupEvents.length}
          </span>
        </button>
        {openMenu === "coupe" && renderEvents(worldCupEvents)}
      </div>

      {/* Championnat du Monde */}
      <div className="border rounded-lg shadow">
        <button
          onClick={() => {
            if (worldChampEvents.length > 0) toggleMenu("championnat");
          }}
          disabled={worldChampEvents.length === 0}
          className={`w-full flex justify-between items-center p-3 font-semibold 
                    ${
                      worldChampEvents.length === 0
                        ? "cursor-not-allowed text-gray-400 bg-gray-100"
                        : "hover:bg-gray-200"
                      // ? "hidden"  : "block"
                    }`}
        >
          <span>Championnat du monde</span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              worldChampEvents.length === 0
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {worldChampEvents.length}
          </span>
        </button>
        {openMenu === "championnat" && renderEvents(worldChampEvents)}
      </div>

      {/* Stage */}
      <div className="border rounded-lg shadow">
        <button
          onClick={() => {
            if (trainingCamp.length > 0) toggleMenu("training");
          }}
          disabled={trainingCamp.length === 0}
          className={`w-full flex justify-between items-center p-3 font-semibold 
                    ${
                      trainingCamp.length === 0
                        ? "cursor-not-allowed text-gray-400 bg-gray-100"
                        : "hover:bg-gray-200"
                    }`}
        >
          <span>Stage </span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              trainingCamp.length === 0
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {trainingCamp.length}
          </span>
        </button>
        {openMenu === "training" && renderEvents(trainingCamp)}
      </div>

      {/* Evenement Pro */}
      <div className="border rounded-lg shadow">
        <button
          onClick={() => {
            if (eventPro.length > 0) toggleMenu("pro");
          }}
          disabled={eventPro.length === 0}
          className={`w-full flex justify-between items-center p-3 font-semibold 
                    ${
                      eventPro.length === 0
                        ? "cursor-not-allowed text-gray-400 bg-gray-100"
                        : "hover:bg-gray-200"
                    }`}
        >
          <span>Evenement Pro et autre event </span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              eventPro.length === 0
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {eventPro.length}
          </span>
        </button>
        {openMenu === "pro" && renderEvents(eventPro)}
      </div>

      {/* See all -> ouvre la modal */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-600 hover:underline"
        >
          See all →
        </button>
      </div>
      {/* ---- MODAL EN PLEIN ÉCRAN ---- */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-2xl shadow-xl w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white/90 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-bold">
                📜 Tous les événements
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalFilter("all")}
                  className={`px-3 py-1 rounded-lg border text-sm font-medium ${
                    modalFilter === "all"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setModalFilter("sport")}
                  className={`px-3 py-1 rounded-lg border text-sm font-medium ${
                    modalFilter === "sport"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Sport
                </button>
                <button
                  onClick={() => setModalFilter("pro")}
                  className={`px-3 py-1 rounded-lg border text-sm font-medium ${
                    modalFilter === "pro"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Pro
                </button>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50 active:scale-[0.98] transition"
              >
                ✕ Fermer
              </button>
            </div>

            {/* Contenu groupé par année */}
            <div className="p-4 md:p-6">
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
                    <div key={year} className="mb-10">
                      <h3 className="text-lg md:text-xl font-semibold mb-3">
                        {year}
                      </h3>

                      <div className="overflow-x-auto rounded-lg border">
                        <table className="w-full text-left text-sm md:text-base">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-2 md:p-3 border-r">Date</th>
                              <th className="p-2 md:p-3 border-r">Lieu</th>
                              <th className="p-2 md:p-3 border-r">
                                Type évènement
                              </th>
                              <th className="p-2 md:p-3 border-r">Type</th>
                              <th className="p-2 md:p-3 border-r">Résultat</th>
                              <th className="p-2 md:p-3">Vidéo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((event, idx) => {
                              const isPast = new Date(event.date) < today;
                              return (
                                <tr
                                  key={`${year}-${idx}`}
                                  className={`border-t hover:bg-gray-50 ${
                                    isPast ? "text-gray-400 bg-gray-50" : ""
                                  }`}
                                >
                                  <td className="p-2 md:p-3 whitespace-nowrap">
                                    {new Date(event.date).toLocaleDateString()}
                                  </td>
                                  <td className="p-2 md:p-3">
                                    {event.lieu_en ||
                                      event.lieu_fr ||
                                      event.event_en ||
                                      "-"}
                                  </td>
                                  <td className="p-2 md:p-3 capitalize">
                                    {event.type_event || "-"}
                                    {/* todo : le faire pour tout les types. */}
                                    {/* mettre un if type_event === "??" ? texte traduit (t('eeee')) : "" */}
                                  </td>
                                  <td className="p-2 md:p-3 capitalize">
                                    {event.type || "-"}
                                  </td>
                                  <td className="p-2 md:p-3">
                                    {event.live_result ? (
                                      <a
                                        href={event.live_result}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                      >
                                        Résultats
                                      </a>
                                    ) : (
                                      <span className="opacity-80">-</span>
                                    )}
                                  </td>
                                  <td className="p-2 md:p-3">
                                    {event.live_video ? (
                                      <a
                                        href={event.live_video}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                      >
                                        Vidéo
                                      </a>
                                    ) : (
                                      <span className="opacity-60">-</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;
