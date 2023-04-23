interface LibraryItem {
  id: number;
  title: string;
  displayInfo(): string;
}

class AuthorEL {
  id: number;
  name: string;
  birthYear: number;

  constructor(id: number, name: string, birthYear: number) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
}

class BookEL implements LibraryItem {
  id: number;
  title: string;
  author: AuthorEL;
  publicationYear: number;

  constructor(
    id: number,
    title: string,
    author: AuthorEL,
    publicationYear: number
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayInfo(): string {
    return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author.name}, Publication Year: ${this.publicationYear}`;
  }
}

class MagazineEL implements LibraryItem {
  id: number;
  title: string;
  issue: number;

  constructor(id: number, title: string, issue: number) {
    this.id = id;
    this.title = title;
    this.issue = issue;
  }

  displayInfo(): string {
    return `Magazine ID: ${this.id}, Title: ${this.title}, Issue: ${this.issue}`;
  }
}

class NewspaperEL implements LibraryItem {
  id: number;
  title: string;
  date: string;

  constructor(id: number, title: string, date: string) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  displayInfo(): string {
    return `Newspaper ID: ${this.id}, Title: ${this.title}, Date: ${this.date}`;
  }
}

const authorEL = new AuthorEL(1, "George Orwell", 1903);
const bookEL = new BookEL(1, "1984", authorEL, 1949);
const magazineEL = new MagazineEL(1, "National Geographic", 1);
const newspaperEL = new NewspaperEL(1, "The New York Times", "2020-01-01");

console.log(bookEL.displayInfo());
console.log(magazineEL.displayInfo());
console.log(newspaperEL.displayInfo());
