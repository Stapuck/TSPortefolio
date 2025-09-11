"use client";

import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { next_date, type EventType } from "../medias/databases/index-global"; // ou adapte ton chemin

const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function CalendarSection() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");
  const { t } = useTranslation();
  const initialLang = document.documentElement.lang || "fr";

  const events = next_date.map((event) => ({
    title: initialLang === "fr" ? event.event_fr : event.event_en,
    start: new Date(event.date),
    end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
    allDay: false,
    resource: event,
  }));

  // todo : revoir pour faire une modal ?? oui il faut je pense. avec photo du lieu en arriere plan ?  revoir 
  const onSelectEvent = (event: { resource: EventType }) => {
    const e = event.resource;
    alert(`
      📅 Date : ${e.date}${e.date_fin ? ` - ${e.date_fin}` : ""}
      ⏰ Début : ${e.start ?? "Non précisé"}
      📍 Lieu : ${initialLang === "fr" ? e.lieu_fr : e.lieu_en}
      🏷 Type : ${e.type_event ?? e.type}
      🎟 Event : ${initialLang === "fr" ? e.event_fr : e.event_en}
      ${e.link_result ? `📊 Résultat link : ${e.link_result}` : ""}
      ${e.link_video ? `📺 Vidéo link : ${e.link_video}` : ""}
      ${e.bibs ? `🎽 Bibs : ${e.bibs}` : ""}
      ${e.photobg ? `🖼 Photo : ${e.photobg}` : ""}
    `);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-2xl font-bold mb-4 text-center">
        {t("Calendar.interactif")}
      </h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        popup
        date={date}
        view={view}
        onNavigate={(newDate) => setDate(newDate)}
        onView={(newView) => setView(newView)}
      />
    </div>
  );
}

// test  @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction

// "use client";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"; // clic, drag
// import { useState } from "react";
// import { next_date, type EventType } from "../medias/databases/index-global";
// import frLocale from "@fullcalendar/core/locales/fr";

// export default function CalendarSection() {
//   const [events] = useState(
//     next_date.map((event) => ({
//       // id: event.id?.toString(),
//       title: event.event_fr,
//       start: event.date,
//       end: event.date_fin ?? event.date,
//       extendedProps: event,
//     }))
//   );

//   const handleEventClick = (info: any) => {
//     const e: EventType = info.event.extendedProps;
//     alert(`
//       📅 Date : ${e.date}${e.date_fin ? ` - ${e.date_fin}` : ""}
//       📍 Lieu : ${e.lieu_fr}
//       🏷 Type : ${e.type_event ?? e.type}
//       🎟 Event : ${e.event_fr}
//     `);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <h3 className="text-2xl font-bold mb-4 text-center">
//         Calendrier FullCalendar
//       </h3>
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         height="70vh"
//         locale={frLocale}
//         events={events}
//         eventClick={handleEventClick}
//       />
//     </div>
//   );
// }
