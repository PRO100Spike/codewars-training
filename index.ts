// isBalanced - Принимает строку и возвращает true или false в зависимости от того, сбалансированы ли фигурные скобки
// isBalanced("}{") => false
// isBalanced("{{}") => false
// isBalanced("{}{}") => true
// isBalanced("foo { bar { baz } boo }") => true
// isBalanced("foo { bar { baz }") => false
// isBalanced("foo { bar } }") => false
function inBalanced(value:string):boolean {
  let count:number = 0;
  for(let i =0; i < value.length; i++) {
    if (value[i] === '{')
      count++
    if (value[i] === '}')
      count--
    if (count < 0)
      break
  }
  return !count
}
