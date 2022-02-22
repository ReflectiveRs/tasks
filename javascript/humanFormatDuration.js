function humanFormatDuration (seconds) {
  if (seconds === 0) {
    return 'now';
  }
  let arr = [];

  if (seconds >= 31536000) {
    let word = Math.floor(seconds / 31536000) === 1 ? ' year' : ' years';
    arr.push(Math.floor(seconds / 31536000) + word);
    seconds = seconds%31536000;
  }
  if (seconds >= 86400) {
    let word = Math.floor(seconds / 86400) === 1 ? ' day' : ' days';
    arr.push(Math.floor(seconds / 86400) + word);
    seconds = seconds%86400;
  }
  if (seconds >= 3600) {
    let word = Math.floor(seconds / 3600) === 1 ? ' hour' : ' hours';
    arr.push(Math.floor(seconds / 3600) + word);
    seconds = seconds%3600;
  }
  if (seconds >= 60) {
    let word = Math.floor(seconds / 60) === 1 ? ' minute' : ' minutes';
    arr.push(Math.floor(seconds / 60) + word);
  }
  if (seconds % 60 !== 0) {
    let word = (seconds % 60) === 1 ? ' second' : ' seconds';
    arr.push(seconds % 60 + word);
  }

  if (arr.length === 1) {
    return arr.join();
  }
  
  let res = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (i === arr.length-1) {
      res += ' and ' + arr[i];
    } else {
      res += ', ' +arr[i] ;
    }
  }
  return res;
}
 

console.log(humanFormatDuration(334662)) 