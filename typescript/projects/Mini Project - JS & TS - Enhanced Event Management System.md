Task: Event Management System

You have been asked to develop an event management system that allows you to manage events, attendees, and event organizers. The system should let you add events and their organizers, filter events by location or date, let users RSVP for events, and send notifications to event attendees.

Create the following interfaces and classes using TypeScript:

1. Interface `Person` with the following properties:

   - `id`: number - A unique identifier for the person.
   - `name`: string - The name of the person.
   - `email`: string - The email of the person.
2. Class `Organizer` that implements the `Person` interface and has the following method:

   - `createEvent(event: Event)`: void - A method to create a new event.
3. Interface `Event` with the following properties and methods:

   - `id`: number - A unique identifier for the event.
   - `name`: string - The name of the event.
   - `location`: string - The location of the event.
   - `date`: Date - The date of the event.
   - `organizer`: Organizer - The organizer of the event.
   - `attendees`: Person[] - An array of attendees for the event.
   - `addAttendee(attendee: Person)`: void - A method to add an attendee to the event.
   - `removeAttendee(attendeeId: number)`: void - A method to remove an attendee from the event by their ID.
4. Class `User` that implements the `Person` interface and has the following methods:

   - `rsvp(event: Event)`: void - A method to RSVP for an event.
   - `cancelRsvp(eventId: number)`: void - A method to cancel an RSVP for an event by its ID.
5. Class `EventManagement` with the following methods:

   - `addEvent(event: Event)`: void - A method to add an event to the event management system.
   - `removeEvent(eventId: number)`: void - A method to remove an event from the event management system by its ID.
   - `filterEventsByLocation(location: string)`: Event[] - A method to filter events by location.
   - `filterEventsByDate(date: Date)`: Event[] - A method to filter events by date.
   - `sendNotifications(eventId: number, message: string)`: void - A method to send notifications to all attendees of an event by its ID.

Make use of arrow functions, classes, interfaces, and array methods such as `push`, `find`, `filter`, and `splice` in the implementation. This task requires a combination of logic and creativity, as it involves managing events, attendees, and organizers in an event management system. The classes and interfaces represent different aspects of the event management system, and you will need to implement methods to add and remove events and attendees, filter events, handle RSVPs, and send notifications to attendees.
