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

// "use client";

// import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// import { fr } from "date-fns/locale";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { next_date, type EventType } from "../medias/databases/index-global";
// import {
//   Calendar as CalendarIcon,
//   // MapPin,
//   // Clock,
//   Trophy,
//   Users,
//   Plane,
//   // ExternalLink,
//   // Play,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const locales = { fr };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
//   getDay,
//   locales,
// });

// export default function CalendarSection() {
//   const [date, setDate] = useState(new Date());
//   const [view, setView] = useState<View>("month");
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
//   const { t } = useTranslation();
//   const initialLang = document.documentElement.lang || "fr";

//   // Enhanced event mapping with better categorization
//   const events = next_date.map((event) => {
//     const eventType = event.type_event || event.type || "other";
//     let color = "#3B82F6"; // Default blue

//     // Color coding based on event type
//     switch (eventType) {
//       case "worldcup":
//         color = "#F59E0B"; // Amber
//         break;
//       case "worldchamp":
//         color = "#8B5CF6"; // Purple
//         break;
//       case "national":
//         color = "#3B82F6"; // Blue
//         break;
//       case "training":
//         color = "#10B981"; // Emerald
//         break;
//       case "pro":
//         color = "#6B7280"; // Gray
//         break;
//       default:
//         color = "#3B82F6";
//     }

//     return {
//       title: initialLang === "fr" ? event.event_fr : event.event_en,
//       start: new Date(event.date),
//       end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
//       allDay: !event.start,
//       resource: event,
//       style: {
//         backgroundColor: color,
//         borderColor: color,
//         color: "white",
//       },
//     };
//   });

//   const onSelectEvent = (event: { resource: EventType }) => {
//     setSelectedEvent(event.resource);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const getEventIcon = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//       case "worldchamp":
//       case "national":
//         return Trophy;
//       case "training":
//         return Users;
//       case "pro":
//         return Plane;
//       default:
//         return CalendarIcon;
//     }
//   };

//   const getEventTypeLabel = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//         return "Coupe du Monde";
//       case "worldchamp":
//         return "Championnat du Monde";
//       case "national":
//         return "Course Nationale";
//       case "training":
//         return "Stage d'entraînement";
//       case "pro":
//         return "Événement Professionnel";
//       default:
//         return "Autre";
//     }
//   };

//   const customEventPropGetter = (event: any) => {
//     return {
//       style: event.style,
//     };
//   };

//   // Custom toolbar
//   const CustomToolbar = ({ label, onNavigate, onView }: any) => (
//     <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
//       <div className="flex items-center space-x-4 mb-4 md:mb-0">
//         <h3 className="text-xl font-bold text-gray-900">{label}</h3>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => onNavigate("PREV")}
//             className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => onNavigate("TODAY")}
//             className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//           >
//             Aujourd'hui
//           </button>
//           <button
//             onClick={() => onNavigate("NEXT")}
//             className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center space-x-2">
//         {["month", "week", "day"].map((viewType) => (
//           <button
//             key={viewType}
//             onClick={() => onView(viewType)}
//             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//               view === viewType
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {viewType === "month"
//               ? "Mois"
//               : viewType === "week"
//               ? "Semaine"
//               : "Jour"}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             {t("Calendar.interactif")}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explorez mon calendrier sportif et professionnel de manière
//             interactive. Cliquez sur un événement pour plus de détails.
//           </p>
//         </div>

//         {/* Legend */}
//         <div className="mb-8">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
//             <h4 className="text-sm font-semibold text-gray-700 mb-3">
//               Légende
//             </h4>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//               {[
//                 { type: "worldcup", color: "#F59E0B", label: "Coupe du Monde" },
//                 {
//                   type: "worldchamp",
//                   color: "#8B5CF6",
//                   label: "Championnat du Monde",
//                 },
//                 {
//                   type: "national",
//                   color: "#3B82F6",
//                   label: "Course Nationale",
//                 },
//                 { type: "training", color: "#10B981", label: "Stage" },
//                 { type: "pro", color: "#6B7280", label: "Professionnel" },
//               ].map((item) => (
//                 <div key={item.type} className="flex items-center space-x-2">
//                   <div
//                     className="w-3 h-3 rounded-full"
//                     style={{ backgroundColor: item.color }}
//                   />
//                   <span className="text-xs text-gray-600">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Calendar Container */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 600 }}
//             onSelectEvent={onSelectEvent}
//             popup
//             date={date}
//             view={view}
//             onNavigate={(newDate) => setDate(newDate)}
//             onView={(newView) => setView(newView)}
//             eventPropGetter={customEventPropGetter}
//             components={{
//               toolbar: CustomToolbar,
//             }}
//             messages={{
//               next: "Suivant",
//               previous: "Précédent",
//               today: "Aujourd'hui",
//               month: "Mois",
//               week: "Semaine",
//               day: "Jour",
//               agenda: "Agenda",
//               date: "Date",
//               time: "Heure",
//               event: "Événement",
//               noEventsInRange: "Aucun événement dans cette période.",
//               showMore: (total) => `+${total} de plus`,
//             }}
//           />
//         </div>

//         {/* Event Detail Modal */}
//         {selectedEvent && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
//               {/* Modal Header */}
//               <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 bg-white/20 rounded-xl">
//                     {(() => {
//                       const Icon = getEventIcon(
//                         selectedEvent.type_event || selectedEvent.type || ""
//                       );
//                       return <Icon className="w-6 h-6" />;
//                     })()}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2">
//                       {initialLang === "fr"
//                         ? selectedEvent.event_fr
//                         : selectedEvent.event_en}
//                     </h3>
//                     <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
//                       {getEventTypeLabel(
//                         selectedEvent.type_event || selectedEvent.type || ""
//                       )}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 space-y-6">
//                 {/* Date & Time */}
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <CalendarIcon className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {selectedEvent.date}
//                       {selectedEvent.date_fin &&
//                         selectedEvent.date_fin !== selectedEvent.date &&
//                         ` - ${selectedEvent.date_fin}`}
//                     </p>
//                     {selectedEvent.start && (
//                       <p className="text-sm text-gray-600">
//                         Début : {selectedEvent.start}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Location */}
//                 {/* <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-green-100 rounded-lg">
//                     <MapPin className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {initialLang */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// todo redemander à claude à 21h pour pouvoir le completer : 
// et revoir dark 