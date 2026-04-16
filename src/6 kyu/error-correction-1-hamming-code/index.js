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
  let text = [];
  text = bits.match(/.{1,3}/g).map(bit => {
    return bit[0] === bit[1] ? bit[0] : bit[0] === bit[2] ? bit[0] : bit[2]
  }).join('').match(/.{1,8}/g).map(bit => {
    return String.fromCharCode(parseInt(bit, 2).toString(10));
  }).join('')
  return text;
}
