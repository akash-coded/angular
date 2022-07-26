function compact(arr) {
  if (arr.length > 3) {
    return arr.slice(0, 3);
  }
  return arr;
}

let myArr = [1, 2, 3, 4, 5];
let trimmedArr = compact(myArr); // code crash
console.log(trimmedArr);
