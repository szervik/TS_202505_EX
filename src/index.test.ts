import { EventService } from "./services/EventService";
import { EventType } from "./types/EventType";
import { IGuest } from "./interfaces/IGuest";
import { Event } from "./models/Event";

describe("EventService", () => {
  let testService: EventService<IGuest>;

  beforeEach(() => {
    testService = new EventService<IGuest>();
  });

  test("createEvent adds an event", () => {
    const birthdayEvent = new Event<IGuest>(
      1,
      "Teszt szülinapja",
      new Date("2025-09-11"),
      "Budapest",
      EventType.Birthday
    );

    testService.createEvent(birthdayEvent);
    const result = testService.getEventById(1);

    expect(result).toBe(birthdayEvent);
  });
});