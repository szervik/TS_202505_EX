"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventService_1 = require("./services/EventService");
const EventType_1 = require("./types/EventType");
const Event_1 = require("./models/Event");
describe("EventService", () => {
    let testService;
    beforeEach(() => {
        testService = new EventService_1.EventService();
    });
    test("createEvent adds an event", () => {
        const birthdayEvent = new Event_1.Event(1, "Teszt szülinapja", new Date("2025-09-11"), "Budapest", EventType_1.EventType.Birthday);
        testService.createEvent(birthdayEvent);
        const result = testService.getEventById(1);
        expect(result).toBe(birthdayEvent);
    });
});
