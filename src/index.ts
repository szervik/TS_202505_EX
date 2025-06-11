import { IGuest } from "./interfaces/IGuest";
import { Event } from "./models/Event";
import { EventService } from "./services/EventService";
import { EventType } from "./types/EventType";


// eseménykezelő példányosítása
const eventService = new EventService<IGuest>();

// új esemény példányosítása
const birthdayEvent = new Event<IGuest>(1, "Janika 10. szülinapja",
    new Date("2025-08-10"),
    "Kecskemét", EventType.Birthday
);

// szülinap esemény létrehozása
eventService.createEvent(birthdayEvent);

// résztvevők regisztrálása és hozzáadása
const guest1: IGuest = {
    id: 1,
    name: "Nagy Réka",
    email: "reka@gmail.com",
    phone: 36205556633
};

eventService.addGuestToEvent(birthdayEvent.id, guest1);

// események listázása
console.log(`Összes esemény: ${eventService.getEvents()}`);

// események szűrése kategóra szerint
console.log(`Szülinapi események: ${eventService.getEventsByType(EventType.Birthday)}`);

// sesemény szerkesztése
eventService.editEvent(birthdayEvent.id, {
    place: "Szolnok",
    name: "Janika kerek 10. szülinapja"
});

// résztvevő törlése
eventService.removeGuestFromEvent(birthdayEvent.id, guest1.email);

// esemény törlése
eventService.deleteEvent(birthdayEvent.id);

console.log(`Események: ${eventService.getEvents()}`);