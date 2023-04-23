class AuthorX {
  name: string;
  birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }
}

class BookX {
  title: string;
  author: AuthorX;
  publicationYear: number;

  constructor(title: string, author: AuthorX, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

const author1 = new AuthorX("George Orwell", 1903);
const author2 = new AuthorX("Aldous Huxley", 1894);

const bookPublished1 = new BookX("1984", author1, 1949);
const bookPublished2 = new BookX("Animal Farm", author1, 1945);
const bookPublished3 = new BookX("Brave New World", author2, 1932);

console.log(
  `Title: ${bookPublished1.title}, Author: ${bookPublished1.author.name}, Publication Year: ${bookPublished1.publicationYear}`
);
console.log(
  `Title: ${bookPublished2.title}, Author: ${bookPublished2.author.name}, Publication Year: ${bookPublished2.publicationYear}`
);
console.log(
  `Title: ${bookPublished3.title}, Author: ${bookPublished3.author.name}, Publication Year: ${bookPublished3.publicationYear}`
);
