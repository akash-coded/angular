class AuthorTS {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class BookTS {
  title: string;
  author: AuthorTS;

  constructor(title: string, author: AuthorTS) {
    this.title = title;
    this.author = author;
  }
}
const bookTS = new BookTS("The Alchemist", new AuthorTS("Paulo Coelho"));
console.log(bookTS);

class ShoppingCartTS {
  items: string[];

  constructor(items: string[] = []) {
    this.items = items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }

  removeItem(index: number): void {
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}
const shoppingCartTS = new ShoppingCartTS(["Mango", "Banana"]);
console.log(shoppingCartTS.getItems());
shoppingCartTS.addItem("Apple");
console.log(shoppingCartTS.getItems());
shoppingCartTS.addItem("Orange");
console.log(shoppingCartTS.getItems());
shoppingCartTS.removeItem(1);
console.log(shoppingCartTS.getItems());
