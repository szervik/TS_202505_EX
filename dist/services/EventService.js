"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const typeGuards_1 = require("../utils/typeGuards");
class EventService {
    constructor() {
        this.events = new Map();
    }
    createEvent(event) {
        this.events.set(event.id, event);
    }
    getEvents() {
        return Array.from(this.events.values());
    }
    getEventById(id) {
        return this.events.get(id);
    }
    getEventsByType(type) {
        return Array.from(this.events.values()).filter(event => event.type === type);
    }
    deleteEvent(id) {
        this.events.delete(id);
    }
    // @Enumerable(false)
    addGuestToEvent(eventId, guest) {
        const event = this.events.get(eventId);
        if (event && (0, typeGuards_1.isGuest)(guest)) {
            event.guests.set(guest.email, guest);
        }
    }
    removeGuestFromEvent(eventId, email) {
        const event = this.events.get(eventId);
        if (event) {
            event.guests.delete(email);
        }
    }
    editEvent(id, updates) {
        const event = this.events.get(id);
        if (event) {
            if (updates.name)
                event.name = updates.name;
            if (updates.place)
                event.place = updates.place;
            if (updates.date)
                event.date = updates.date;
            if (updates.type)
                event.type = updates.type;
        }
    }
}
exports.EventService = EventService;
