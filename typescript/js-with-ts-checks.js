// @ts-check

function compact(arr) {
  if (srr.length > 3) {
    return arr.trim(0, 3);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let resultantArr = compact(arr); // code crash
console.log(resultantArr);
