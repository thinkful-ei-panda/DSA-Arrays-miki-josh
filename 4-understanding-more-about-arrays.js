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
  arr.pop();
  arr.pop();
  arr.pop();

  arr.push("tauhida");

  console.log(arr);
  console.log(arr.get(0));
}
  
main();

// We get NaN because memory is a float 64 array.
// Resize creates a copy of the old array at a new location and with greater capacity.