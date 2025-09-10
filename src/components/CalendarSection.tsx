"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { fr } from "date-fns/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { next_date, type EventType } from "../medias/databases/index-global"; // ou adapte ton chemin

const locales = { fr };


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function CalendarSection() {
  const events = next_date.map((event) => ({
    title: event.event_fr,
    start: new Date(event.date),
    end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
    allDay: false,
    resource: event,
  }));


  // todo : revoir pour faire une modal ?? 
  const onSelectEvent = (event: { resource: EventType }) => {
    const e = event.resource;
    alert(`
      📅 Date : ${e.date}${e.date_fin ? ` - ${e.date_fin}` : ""}
      ⏰ Début : ${e.start ?? "Non précisé"}
      📍 Lieu : ${e.lieu_fr}
      🏷 Type : ${e.type_event ?? e.type}
      🎟 Event : ${e.event_fr}
      ${e.live_result ? `📊 Résultat live : ${e.live_result}` : ""}
      ${e.live_video ? `📺 Vidéo live : ${e.live_video}` : ""}
      ${e.bibs ? `🎽 Bibs : ${e.bibs}` : ""}
      ${e.photobg ? `🖼 Photo : ${e.photobg}` : ""}
    `);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Calendrier Interactif
      </h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        popup
      />
    </div>
  );
}
