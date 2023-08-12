const argumentArray = [];
function lastIndexOf(argumentArray,v){
  for(let i = argumentArray.length - 1;i >= 0;i--){
    if(argumentArray[i] === v)
      return i;
  }
  return -1;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


// const indices = [];
// const array = ["a", "b", "a", "c", "a", "d"];
// const element = "a";
// let idx = array.indexOf(element);
// while (idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]