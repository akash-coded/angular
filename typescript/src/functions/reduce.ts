const numbersArray = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers in the array
const sum = numbersArray.reduce(
  (total, currentNumber) => total + currentNumber,
  0
);
console.log(sum);
