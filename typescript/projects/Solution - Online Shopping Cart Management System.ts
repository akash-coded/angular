interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Cart {
  addItem(item: CartItem): void;
  updateQuantity(item: CartItem, newQuantity: number): void;
  removeItem(item: CartItem): void;
  getItems(): CartItem[];
  getTotalCost(): number;
}

class ShoppingCart implements Cart {
  items: CartItem[];

  constructor(items: CartItem[] = []) {
    this.items = items;
  }

  addItem = (item: CartItem): void => {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  };

  updateQuantity = (item: CartItem, newQuantity: number): void => {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = newQuantity;
    }
  };

  removeItem = (item: CartItem): void => {
    this.items = this.items.filter((cartItem) => cartItem.id !== item.id);
  };

  getItems = (): CartItem[] => this.items;

  getTotalCost = (): number =>
    this.items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Create instances of ShoppingCart and CartItem
const shoppingCart = new ShoppingCart();
const item1: CartItem = { id: 1, name: "Laptop", price: 1000, quantity: 1 };
const item2: CartItem = { id: 2, name: "Headphones", price: 150, quantity: 1 };

// Add items to the cart
shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

// Get a list of items in the cart
console.log(shoppingCart.getItems());

// Update the quantity of an item
shoppingCart.updateQuantity(item2, 2);

// Remove an item from the cart
shoppingCart.removeItem(item1);

// Get a list of items in the cart
console.log(shoppingCart.getItems());
