import { IEvent } from "../interfaces/IEvent";
import { IGuest } from "../interfaces/IGuest";


export class Event<T extends IGuest> implements IEvent<T> {
    guests: Map<string, T>;

    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public place: string,
        public type: string
    ) {
        this.guests = new Map<string, T>();
    }
}