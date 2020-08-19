const Array = require('./array.js');

function main(){

  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}

main();

/* After pushing 3: length: 1, capacity: 3, ptr: 0
After pushing the remaining values: length: 6, capacity: 12, ptr: 3
At the beginning of the fourth push, length is 3, prompting an increase to capacity of 12 ((3 + 1) *3) */
