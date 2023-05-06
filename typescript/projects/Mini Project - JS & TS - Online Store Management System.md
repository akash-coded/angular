Task: Online Store Management System

You have been asked to develop an online store management system that allows you to manage products, product categories, and customers' orders. The system should let you add products and their categories, filter products by category or price range, and let customers place and view their orders.

Create the following interfaces and classes using TypeScript:

1. Interface `ProductCategory` with the following properties:

   - `id`: number - A unique identifier for the product category.
   - `name`: string - The name of the product category.
2. Interface `Product` with the following properties and methods:

   - `id`: number - A unique identifier for the product.
   - `name`: string - The name of the product.
   - `price`: number - The price of the product.
   - `category`: ProductCategory - The category of the product.
3. Interface `OrderItem` with the following properties:

   - `product`: Product - The product in the order item.
   - `quantity`: number - The quantity of the product in the order item.
4. Class `Customer` with the following properties and methods:

   - `id`: number - A unique identifier for the customer.
   - `name`: string - The name of the customer.
   - `email`: string - The email of the customer.
   - `orders`: Order[] - An array of orders placed by the customer.
   - `placeOrder(order: Order)`: void - A method to place an order.
   - `viewOrders()`: Order[] - A method to view all orders placed by the customer.
5. Interface `Order` with the following properties and methods:

   - `id`: number - A unique identifier for the order.
   - `customer`: Customer - The customer who placed the order.
   - `items`: OrderItem[] - An array of order items in the order.
   - `status`: "placed" | "shipped" | "delivered" - The status of the order.
   - `addItem(item: OrderItem)`: void - A method to add an item to the order.
   - `removeItem(productId: number)`: void - A method to remove an item from the order by product ID.
6. Class `OnlineStore` with the following methods:

   - `addProduct(product: Product)`: void - A method to add a product to the store.
   - `removeProduct(productId: number)`: void - A method to remove a product from the store by its ID.
   - `filterProductsByCategory(categoryId: number)`: Product[] - A method to filter products by category ID.
   - `filterProductsByPriceRange(minPrice: number, maxPrice: number)`: Product[] - A method to filter products by price range.
   - `getOrder(orderId: number)`: Order | null - A method to get an order by its ID.
   - `updateOrderStatus(orderId: number, status: "placed" | "shipped" | "delivered")`: void - A method to update the status of an order by its ID.

Make use of arrow functions, classes, interfaces, and array methods such as `push`, `find`, `filter`, and `splice` in the implementation. This task requires a combination of logic and creativity, as it involves managing products, product categories, and customers' orders in an online store management system. The classes and interfaces represent different aspects of the online store management system, and you will need to implement methods to add and remove products and product categories, filter products, handle customer orders, and manage order statuses.
