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

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
}

main();

// After popping 3 times: length: 3, capacity: 12, ptr: 3