// Interface for a Product Category
interface OSMProductCategory {
  id: number;
  name: string;
}

// Interface for a Product
interface OSMProduct {
  id: number;
  name: string;
  price: number;
  category: OSMProductCategory;
}

// Interface for an Order Item
interface OSMOrderItem {
  product: OSMProduct;
  quantity: number;
}

// Interface for an Order
interface OSMOrder {
  id: number;
  customer: OSMCustomer;
  items: OSMOrderItem[];
  status: "placed" | "shipped" | "delivered";

  addItem(item: OSMOrderItem): void;
  removeItem(productId: number): void;
}

// Class for a Customer's Order
class OSMCustomerOrder implements OSMOrder {
  id: number;
  customer: OSMCustomer;
  items: OSMOrderItem[];
  status: "placed" | "shipped" | "delivered";

  constructor(id: number, customer: OSMCustomer) {
    this.id = id;
    this.customer = customer;
    this.items = [];
    this.status = "placed";
  }

  addItem(item: OSMOrderItem): void {
    this.items.push(item);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }
}

// Class for a Customer
class OSMCustomer {
  id: number;
  name: string;
  email: string;
  orders: OSMOrder[];

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  placeOrder(order: OSMOrder): void {
    this.orders.push(order);
  }

  viewOrders(): OSMOrder[] {
    return this.orders;
  }
}

// Class for an Online Store
class OSMOnlineStore {
  customers: OSMCustomer[];
  products: OSMProduct[];
  orders: OSMOrder[];

  constructor() {
    this.customers = [];
    this.products = [];
    this.orders = [];
  }

  addCustomer(customer: OSMCustomer): void {
    this.customers.push(customer);
  }

  addProduct(product: OSMProduct): void {
    this.products.push(product);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  filterProductsByCategory(categoryId: number): OSMProduct[] {
    return this.products.filter(
      (product) => product.category.id === categoryId
    );
  }

  filterProductsByPriceRange(minPrice: number, maxPrice: number): OSMProduct[] {
    return this.products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  searchProductsByName(name: string): OSMProduct[] {
    return this.products.filter((product) => product.name.includes(name));
  }

  getOrder(orderId: number): OSMOrder | null {
    return this.orders.find((order) => order.id === orderId) || null;
  }

  updateOrderStatus(
    orderId: number,
    status: "placed" | "shipped" | "delivered"
  ) {
    const order = this.getOrder(orderId);
    if (order) {
      order.status = status;
    }
  }

  placeOrder(order: OSMOrder): void {
    this.orders.push(order);
    order.customer.placeOrder(order);
    console.log(`Order #${order.id} placed successfully.`);
  }
}

// Test the Online Store Management System
// Create a new online store
const store = new OSMOnlineStore();

// Create a few customers
const customer1 = new OSMCustomer(1, "John Doe", "john.doe@example.com");
const customer2 = new OSMCustomer(2, "Jane Doe", "jane.doe@example.com");

// Add customers to the store
store.addCustomer(customer1);
store.addCustomer(customer2);

// Create a few categories
const category1 = { id: 1, name: "Electronics" };
const category2 = { id: 2, name: "Clothing" };

// Create a few products
const product1 = { id: 1, name: "iPhone 12", price: 999, category: category1 };
const product2 = {
  id: 2,
  name: "Samsung Galaxy S21",
  price: 899,
  category: category1,
};
const product3 = {
  id: 3,
  name: "Nike Air Max",
  price: 129,
  category: category2,
};
const product4 = {
  id: 4,
  name: "Adidas Superstar",
  price: 99,
  category: category2,
};

// Add products to the store
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);

// Create a few orders
const order1 = new OSMCustomerOrder(1, customer1);
const order2 = new OSMCustomerOrder(2, customer2);

// Add items to the orders
order1.addItem({ product: product1, quantity: 1 });
order1.addItem({ product: product3, quantity: 2 });
order2.addItem({ product: product2, quantity: 1 });
order2.addItem({ product: product4, quantity: 1 });

// Place orders
store.placeOrder(order1);
store.placeOrder(order2);

// View orders
console.log(store.getOrder(1));
console.log(store.getOrder(2));

// Update order status
store.updateOrderStatus(1, "shipped");
store.updateOrderStatus(2, "shipped");

// View orders
console.log(store.getOrder(1));
console.log(store.getOrder(2));

// Update order status
store.updateOrderStatus(1, "delivered");
store.updateOrderStatus(2, "delivered");

// View orders
console.log(store.getOrder(1));
console.log(store.getOrder(2));

// Filter products by category
console.log(store.filterProductsByCategory(1));
console.log(store.filterProductsByCategory(2));

// Filter products by price range
console.log(store.filterProductsByPriceRange(100, 200));
console.log(store.filterProductsByPriceRange(900, 1000));

// Search products by name
console.log(store.searchProductsByName("iPhone"));
console.log(store.searchProductsByName("Nike"));

// Remove products
store.removeProduct(1);
store.removeProduct(4);

// Filter products by category
console.log(store.filterProductsByCategory(1));
console.log(store.filterProductsByCategory(2));

// Search products by name
console.log(store.searchProductsByName("iPhone"));
console.log(store.searchProductsByName("Nike"));
