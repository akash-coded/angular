// Inetrface for Person
interface EPerson {
  id: number;
  name: string;
  email: string;
}

// Class for Organizer
class EOrganizer implements EPerson {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  createEvent(event: EEvent): void {
    console.log(`Organizer ${this.name} created an event: ${event.name}`);
  }
}

// Interface for Event
interface EEvent {
  id: number;
  name: string;
  location: string;
  date: Date;
  organizer: EOrganizer;
  attendees: EPerson[];

  addAttendee(attendee: EPerson): void;
  removeAttendee(attendeeId: number): void;
}

class EUser implements EPerson {
  id: number;
  name: string;
  email: string;
  attendedEvents: EEvent[] = [];

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  rsvp(event: EEvent): void {
    event.addAttendee(this);
    this.attendedEvents.push(event);
    console.log(`User ${this.name} RSVPed for event: ${event.name}`);
  }

  cancelRsvp(eventId: number): void {
    const eventIndex = this.attendedEvents.findIndex(
      (event) => event.id === eventId
    );
    if (eventIndex === -1) {
      console.log(`User ${this.name} has not RSVPed for event: ${eventId}`);
      return;
    }
    const event = this.attendedEvents[eventIndex];
    event.removeAttendee(this.id);
    this.attendedEvents.splice(eventIndex, 1);
    console.log(`User ${this.name} cancelled RSVP for event: ${event.name}`);
  }
}

class ECustomEvent implements EEvent {
  id: number;
  name: string;
  location: string;
  date: Date;
  organizer: EOrganizer;
  attendees: EPerson[] = [];

  constructor(
    id: number,
    name: string,
    location: string,
    date: Date,
    organizer: EOrganizer
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.organizer = organizer;
  }

  addAttendee(attendee: EPerson): void {
    this.attendees.push(attendee);
  }

  removeAttendee(attendeeId: number): void {
    this.attendees = this.attendees.filter(
      (attendee) => attendee.id !== attendeeId
    );
  }
}

class EEventManagement {
  events: EEvent[] = [];

  addEvent(event: EEvent): void {
    this.events.push(event);
    console.log(`Event ${event.name} added to the system`);
  }

  removeEvent(eventId: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    this.events.splice(eventIndex, 1);
    console.log(`Event ${event.name} removed from the system`);
  }

  filterEventsByLocation(location: string): EEvent[] {
    return this.events.filter((event) => event.location === location);
  }

  filterEventsByDate(date: Date): EEvent[] {
    return this.events.filter((event) => event.date === date);
  }

  filterEventsByOrganizer(organizer: EOrganizer): EEvent[] {
    return this.events.filter((event) => event.organizer === organizer);
  }

  filterEventsByAttendee(attendee: EPerson): EEvent[] {
    return this.events.filter((event) => event.attendees.includes(attendee));
  }

  sendNotifications(eventId: number, message: string): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    event.attendees.forEach((attendee) => {
      console.log(
        `Notification sent to ${attendee.name} (${attendee.email}): ${message}`
      );
    });
  }

  printEvents(): void {
    console.log(this.events);
  }

  printEventDetails(eventId: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    console.log(event);
  }

  printEventAttendees(eventId: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    console.log(event.attendees);
  }

  printEventOrganizer(eventId: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    console.log(event.organizer);
  }

  printEventRSVPs(eventId: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    if (eventIndex === -1) {
      console.log(`Event ${eventId} not found in the system`);
      return;
    }
    const event = this.events[eventIndex];
    console.log(event.attendees);
  }
}

// Create event management system
const eventManagement = new EEventManagement();

// Create organizers and users
const organizer = new EOrganizer(1, "John", "john@example.com");
const user1 = new EUser(2, "Jane Smith", "jane@example.com");
const user2 = new EUser(3, "Bob Smith", "bob@example.com");

// Create events
const event1 = new ECustomEvent(
  1,
  "Event 1",
  "Location 1",
  new Date("2023-06-10"),
  organizer
);
const event2 = new ECustomEvent(
  2,
  "Event 2",
  "Location 2",
  new Date(),
  organizer
);

// Add events
eventManagement.addEvent(event1);
eventManagement.addEvent(event2);

// Add attendees
user1.rsvp(event1);
user2.rsvp(event1);
user2.rsvp(event2);

// Print events and details
eventManagement.printEvents();
eventManagement.printEventDetails(1);
eventManagement.printEventDetails(2);
eventManagement.printEventAttendees(1);
eventManagement.printEventAttendees(2);
eventManagement.printEventOrganizer(1);
eventManagement.printEventOrganizer(2);

// Cancel RSVP
user1.cancelRsvp(1);

// Filter events by location
const eventsInLocation = eventManagement.filterEventsByLocation("Location 1");
console.log(eventsInLocation);

// Filter today's events by date
const eventsOnDate = eventManagement.filterEventsByDate(new Date());

// Filter events by organizer
const eventsByOrganizer = eventManagement.filterEventsByOrganizer(organizer);

// Filter events by attendee
const eventsByAttendee = eventManagement.filterEventsByAttendee(user1);

// Send notifications
eventManagement.sendNotifications(1, "Event 1 is starting soon!");
eventManagement.sendNotifications(2, "Event 2 is starting soon!");

// Remove event
eventManagement.removeEvent(1);
eventManagement.printEvents();
