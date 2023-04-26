interface LibraryItem {
  id: number;
  title: string;
  copiesAvailable: number;
  displayInfo(): string;
  borrowCopy(): void;
  returnCopy(): void;
}

class Author {
  id: number;
  name: string;
  birthYear: number;

  constructor(id: number, name: string, birthYear: number) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
}

class Book implements LibraryItem {
  id: number;
  title: string;
  author: Author;
  publicationYear: number;
  copiesAvailable: number;

  constructor(
    id: number,
    title: string,
    author: Author,
    publicationYear: number,
    copiesAvailable: number = 10
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.copiesAvailable = copiesAvailable;
  }

  displayInfo(): string {
    return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author.name}, Publication Year: ${this.publicationYear}`;
  }

  borrowCopy(): void {
    this.copiesAvailable--;
  }

  returnCopy(): void {
    this.copiesAvailable++;
  }
}

class LibraryMember {
  id: number;
  name: string;
  borrowedItems: LibraryItem[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.borrowedItems = [];
  }

  borrowItem(item: LibraryItem): void {
    item.borrowCopy();
    this.borrowedItems.push(item);
  }

  returnItem(item: LibraryItem): void {
    item.returnCopy();
    const itemIndex = this.borrowedItems.findIndex((i) => i.id === item.id);
    if (itemIndex !== -1) {
      this.borrowedItems.splice(itemIndex, 1);
    }
  }
}

class Magazine implements LibraryItem {
  id: number;
  title: string;
  issue: number;
  copiesAvailable: number;

  constructor(
    id: number,
    title: string,
    issue: number,
    copiesAvailable: number = 20
  ) {
    this.id = id;
    this.title = title;
    this.issue = issue;
    this.copiesAvailable = copiesAvailable;
  }

  displayInfo(): string {
    return `Magazine ID: ${this.id}, Title: ${this.title}, Issue: ${this.issue}, Copies Available: ${this.copiesAvailable}`;
  }

  borrowCopy(): void {
    this.copiesAvailable--;
  }

  returnCopy(): void {
    this.copiesAvailable++;
  }
}

class Newspaper implements LibraryItem {
  id: number;
  title: string;
  date: string;
  copiesAvailable: number;

  constructor(
    id: number,
    title: string,
    date: string,
    copiesAvailable: number = 300
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.copiesAvailable = copiesAvailable;
  }

  displayInfo(): string {
    return `Newspaper ID: ${this.id}, Title: ${this.title}, Date: ${this.date}, Copies Available: ${this.copiesAvailable}`;
  }

  borrowCopy(): void {
    this.copiesAvailable--;
  }

  returnCopy(): void {
    this.copiesAvailable++;
  }
}

// Create instances of the Author, Book, Magazine, and Newspaper classes
const author1 = new Author(1, "George Orwell", 1903);
const book1 = new Book(101, "1984", author1, 1949);
const magazine1 = new Magazine(201, "National Geographic", 150);
const newspaper1 = new Newspaper(301, "The New York Times", "2023-04-22");

const member1 = new LibraryMember(1, "John Doe");

// Borrow and return a book
member1.borrowItem(book1);
console.log(book1.displayInfo());
member1.returnItem(book1);
console.log(book1.displayInfo());

// Borrow and return a magazine
member1.borrowItem(magazine1);
console.log(magazine1.displayInfo());
member1.returnItem(magazine1);
console.log(magazine1.displayInfo());

// Borrow and return a newspaper
member1.borrowItem(newspaper1);
console.log(newspaper1.displayInfo());
member1.returnItem(newspaper1);
console.log(newspaper1.displayInfo());
