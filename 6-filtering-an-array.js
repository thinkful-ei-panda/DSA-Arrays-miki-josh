function removeLessThanFive (arr) {
  const result = [];

  for(let i = 0; i < arr.length; i++){
    if (arr[i] >= 5) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeLessThanFive([1, 3, 5, 7, 9]));

// 0(n) time complexity increases at a rate directly proportional to any increase in input;