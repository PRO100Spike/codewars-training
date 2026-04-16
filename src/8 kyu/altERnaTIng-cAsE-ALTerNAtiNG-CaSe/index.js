String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.valueOf().replace(/[A-Za-z]/g, (m) => {
    return String.fromCharCode(m.charCodeAt() + (m.charCodeAt() > 96 ? -32 : 32))
  })
}
