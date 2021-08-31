// https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
  // Code here
  return s[s.length - 1] === '?' ? s : s + '?'
}
