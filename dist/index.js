"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("./models/Event");
const EventService_1 = require("./services/EventService");
const EventType_1 = require("./types/EventType");
// eseménykezelő példányosítása
const eventService = new EventService_1.EventService();
// új esemény példányosítása
const birthdayEvent = new Event_1.Event(1, "Janika 10. szülinapja", new Date("2025-08-10"), "Kecskemét", EventType_1.EventType.Birthday);
// szülinap esemény létrehozása
eventService.createEvent(birthdayEvent);
// résztvevők regisztrálása és hozzáadása
const guest1 = {
    id: 1,
    name: "Nagy Réka",
    email: "reka@gmail.com",
    phone: 36205556633
};
eventService.addGuestToEvent(birthdayEvent.id, guest1);
// események listázása
console.log(`Összes esemény: ${eventService.getEvents()}`);
// események szűrése kategóra szerint
console.log(`Szülinapi események: ${eventService.getEventsByType(EventType_1.EventType.Birthday)}`);
// sesemény szerkesztése
eventService.editEvent(birthdayEvent.id, {
    place: "Szolnok",
    name: "Janika kerek 10. szülinapja"
});
// résztvevő törlése
eventService.removeGuestFromEvent(birthdayEvent.id, guest1.email);
// esemény törlése
eventService.deleteEvent(birthdayEvent.id);
// események listázása
console.log(`Események: ${eventService.getEvents()}`);
