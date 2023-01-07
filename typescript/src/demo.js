var x = 5;
console.log(x);
x = "abc";
console.log(x);

function greet(name, message) {
  console.log(name + " : " + message);
}
greet("Akash", "Hello");
greet("Akash");
greet();
greet("Akash", "Hello", "XYZ");
