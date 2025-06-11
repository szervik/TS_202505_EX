import { IEvent } from "../interfaces/IEvent";
import { IGuest } from "../interfaces/IGuest";
import { EventType } from '../types/EventType';


export class Event<T extends IGuest> implements IEvent<T> {
    guests: Map<string, T>;

    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public place: string,
        public type: EventType
    ) {
        this.guests = new Map<string, T>();
    }
}