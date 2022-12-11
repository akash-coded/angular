function makeCompact(arr: number[]) {
  if (arr.length > 3) {
    return arr.slice(0, 3);
  }
  return arr;
}

let beforeArr: number[] = [1, 2, 3, 4, 5];
let afterArr = makeCompact(beforeArr); // code crash
console.log(afterArr);
