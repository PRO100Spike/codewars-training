// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.valueOf().replace(/[A-Za-z]/g, (m) => {
    return String.fromCharCode(m.charCodeAt() + (m.charCodeAt() > 96 ? -32 : 32))
  })
}
