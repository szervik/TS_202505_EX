"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(id, name, date, place, type) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.place = place;
        this.type = type;
        this.guests = new Map();
    }
}
exports.Event = Event;
