class Author {
  constructor(name) {
    this.name = name;
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const book1 = new Book("The Alchemist", new Author("Paulo Coelho"));
console.log(book1);

class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}

const shoppingCart1 = new ShoppingCart(["Mango", "Banana"]);
console.log(shoppingCart1.getItems());
shoppingCart1.addItem("Apple");
console.log(shoppingCart1.getItems());
shoppingCart1.addItem("Orange");
console.log(shoppingCart1.getItems());
shoppingCart1.removeItem(1);
console.log(shoppingCart1.getItems());
