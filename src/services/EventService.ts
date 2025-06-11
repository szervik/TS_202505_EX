import { IEvent } from "../interfaces/IEvent";
import { IGuest } from "../interfaces/IGuest";
import { isGuest } from "../utils/typeGuards";

export class EventService<T extends IGuest> {
    private events: Map<number, IEvent<T>>;

    constructor() {
        this.events = new Map<number, IEvent<T>>();
    }

    createEvent(event: IEvent<T>): void {
        this.events.set(event.id, event);
    }

    getEvents(): IEvent<T>[] {
        return Array.from(this.events.values());
    }

    getEventById(id: number): IEvent<T> | undefined {
        return this.events.get(id);
    }

    getEventsByType(type: string): IEvent<T>[] {
        return Array.from(this.events.values()).filter(event => event.type === type);
    }

    deleteEvent(id: number): void {
        this.events.delete(id);
    }

    addGuestToEvent(eventId: number, guest: T): void {
        const event = this.events.get(eventId);
        if (event && isGuest(guest)) {
            event.guests.set(guest.email, guest);
        }
    }

    removeGuestFromEvent(eventId: number, email: string): void {
        const event = this.events.get(eventId);
        if (event) {
            event.guests.delete(email);
        }
    }
}