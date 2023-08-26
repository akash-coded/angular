/**
 * Named Function
 */
function display() {
  console.log("Hello TypeScript!");
}
display();

/**
 * Function with parameter types and return type
 *
 * @param x number
 * @param y number
 * @returns number
 */
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(2, 3));

/**
 * Anonymous Function or Function Expression
 */
let greeting = function () {
  console.log("Hello TypeScript!");
};
greeting();

/**
 * Anonymous Function or Function Expression with parameter types and return type
 *
 * @param x number
 * @param y number
 * @returns number
 */
let add = function (x: number, y: number): number {
  return x + y;
};
console.log(add(7, 3));

/**
 * Function parameters
 *
 * @param name string
 * @param message string
 */
function greetingFromUser(name: string, message: string): void {
  console.log(name + " : " + message);
}
greetingFromUser("Akash", "Hello");
greetingFromUser("Akash");
greetingFromUser();
greetingFromUser("Akash", "Hello", "XYZ");

/**
 * Optional Parameters
 *
 * @param name string
 * @param message string | optional
 */
function greetingFromUserOptional(name: string, message?: string): void {
  console.log(name + " : " + message);
}
greetingFromUserOptional("Akash", "Hello");
greetingFromUserOptional("Akash");
greetingFromUserOptional();
greetingFromUserOptional("Akash", "Hello", "XYZ");

/**
 * Default Parameters
 *
 * @param name string | undefined
 * @param message string
 */
function greetingFromUserDefault(
  name: string = "Akash",
  message: string
): void {
  console.log(name + " : " + message);
}
greetingFromUserDefault("Akash", "Hello");
greetingFromUserDefault(undefined, "Hello");
greetingFromUserDefault();
greetingFromUserDefault("Akash", "Hello", "XYZ");
