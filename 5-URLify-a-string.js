function urlify (str){
  // create an empty string in which to push values
  let ticks = 0;

  if (str === ''){
    throw new Error('Invalid string');
  }  
  let url = '';
  // loop through the string and check for spaces, if space exists, replace character with %20, otherwise push character to URL
  for (let i = 0; i < str.length; i++){
    ticks++;
    if (str[i] === ' '){
      url += '%20';
    }
    else {
      url += str[i];
    }
  } 
  return {url, ticks};
}

console.log(urlify('www.thinkful.com /tauh ida parv een'));

// 0(n) time complexity increases at a rate directly proportional to any increase in input;

/* alternate method at 0(2n)
    function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
}*/