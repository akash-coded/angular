class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

interface MyEvent {
  id: number;
  name: string;
  date: string;
  register(user: User): void;
  attend(user: User): void;
  provideFeedback(user: User, feedback: string): void;
}

class EventManager implements MyEvent {
  id: number;
  name: string;
  date: string;
  registrants: User[];
  attendees: User[];
  feedbacks: { user: User; feedback: string }[];

  constructor(id: number, name: string, date: string) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.registrants = [];
    this.attendees = [];
    this.feedbacks = [];
  }

  register = (user: User): void => {
    this.registrants.push(user);
  };

  attend = (user: User): void => {
    const index = this.registrants.findIndex(
      (registrant) => registrant.id === user.id
    );
    if (index !== -1) {
      this.attendees.push(user);
    }
  };

  provideFeedback = (user: User, feedback: string): void => {
    const index = this.attendees.findIndex(
      (attendee) => attendee.id === user.id
    );
    if (index !== -1) {
      this.feedbacks.push({ user, feedback });
    }
  };

  getRegistrants = (): User[] => this.registrants;

  getAttendees = (): User[] => this.attendees;

  getFeedbacks = (): { user: User; feedback: string }[] => this.feedbacks;
}

// Create instances of the User and EventManager classes
const user1 = new User(1, "User 1");
const user2 = new User(2, "User 2");
const user3 = new User(3, "User 3");

const event1 = new EventManager(1, "Event 1", "2021-01-01");
const event2 = new EventManager(2, "Event 2", "2021-02-02");
const event3 = new EventManager(3, "Event 3", "2021-03-03");

// Register users for the events
event1.register(user1);
event1.register(user2);
event1.register(user3);

event2.register(user1);
event2.register(user3);

// Mark users' attendance for the events
event1.attend(user1);
event1.attend(user2);

event2.attend(user1);

// Provide feedback for the events
event1.provideFeedback(user1, "Feedback 1");
event1.provideFeedback(user2, "Feedback 2");

event2.provideFeedback(user1, "Feedback 3");

// Get registered users, attendees, and feedbacks for the events
console.log(event1.getRegistrants());
console.log(event1.getAttendees());
console.log(event1.getFeedbacks());

console.log(event2.getRegistrants());
console.log(event2.getAttendees());
console.log(event2.getFeedbacks());
