// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/train/javascript

function encode(text) {
  let bits = [];
  for (let i = 0; i < text.length; i++ ) {
    bits.push(
      (('0000000' + parseInt(text[i].charCodeAt(), 10).toString(2)).slice(-8)).split('').map(ch => ch.repeat(3)).join('')
    );
  }
  return bits.join('');
}

function decode(bits) {
  console.log(bits.match(/.{1,3}/g))
  return text;
}
