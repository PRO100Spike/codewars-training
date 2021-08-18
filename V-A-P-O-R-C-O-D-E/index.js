//https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
  return string.replace(/\s/g, '').split('').map(ch => {
    return ch.toUpperCase()
  }).join('  ')
}
