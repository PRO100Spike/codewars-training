// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// return masked string
function maskify(cc) {
  const count = cc.length - 4
  return `${count > 0 ? '#'.repeat(count) : ''}${cc[cc.length - 4] ? cc[cc.length - 4] : ''}${cc[cc.length - 3] ? cc[cc.length - 3] : ''}${cc[cc.length - 2] ? cc[cc.length - 2] : ''}${cc[cc.length - 1] ? cc[cc.length - 1] : ''}`
}
