function vaporcode(string) {
  return string.replace(/\s/g, '').split('').map(ch => {
    return ch.toUpperCase()
  }).join('  ')
}
