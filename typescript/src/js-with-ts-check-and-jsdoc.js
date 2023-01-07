// @ts-check

/** @param {any[]} arr */
function compact(arr) {
  if (arr.length > 3) {
    return arr.trim(0, 3);
  }
  return arr;
}

let array = [1, 2, 3, 4, 5];
let trimmedArray = compact(array); // code crash
console.log(trimmedArray);
