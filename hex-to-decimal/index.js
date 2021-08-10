// https://www.codewars.com/kata/57a4d500e298a7952100035d/train/javascript

function hexToDec(hexString) {
  //your code here
  return hexString
    .toUpperCase()
    .split("")
    .reduce((a, v, i) => {
      return hexString[0] === "-"
        ? a -
            (+v >= 0
              ? +v * Math.pow(16, hexString.length - i - 1)
              : (v.charCodeAt() - (v.charCodeAt() === 45 ? 45 : 55)) *
                Math.pow(16, hexString.length - i - 1))
        : a +
            (+v >= 0
              ? +v * Math.pow(16, hexString.length - i - 1)
              : (v.charCodeAt() - 55) * Math.pow(16, hexString.length - i - 1));
    }, 0);
}

// or opt solution
function hexToDec(hexString) {
  //your code here
  return hexString
    .toUpperCase()
    .split("")
    .reduce((a, v, i) => {
      return (
        a +
        (hexString[0] === "-" ? -1 : 1) *
          (+v >= 0
            ? +v * Math.pow(16, hexString.length - i - 1)
            : (v.charCodeAt() - (v.charCodeAt() === 45 ? 45 : 55)) *
              Math.pow(16, hexString.length - i - 1))
      );
    }, 0);
}

// or Best Practices
function hexToDec(hexString) {
  return  parseInt(hexString, 16);
}
