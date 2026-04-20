# Balanced Braces (with non-brace characters)

Given a string, write a function that returns true if that string contains valid (or balanced) braces, including () [] {}.

## Example:

```
isBalanced("}{") => false
isBalanced("{{}") => false
isBalanced("{}{}") => true
isBalanced("foo { bar { baz } boo }") => true
isBalanced("foo { bar { baz }") => false
isBalanced("foo { bar } }") => false
```
# Balanced Braces (with non-brace characters)*
Also include the number of pairs of balanced braces and the number of leftover braces in the form of a tuple: [true/false, number of pairs of balanced braces, number of leftover braces]. The number of leftover braces include open and close braces, so count them seperately and not as pairs.

By balanced, I mean that each brace is closed in the reverse order in which it was opened (e.g. the first brace opened should be the last one closed and the last one opened should be the first one closed).

For example, in the string "(string[5])", the first brace opened is ( and the second one opened is [, which means the [ should be closed first and the ( closed last. Since this is the case, the function should return true because it is balanced and because there are two balanced braces and no unbalanced braces, it should also return 2 and 0 in this format: [true, 2, 0].

There may be characters between the braces. The string may also be empty, in which case return [true, 0, 0] because it's technically balanced.

## Example:

```
isBalanced("(string[5])") => [true, 2, 0]
isBalanced("(string[)5]") => [false, 0, 4]
isBalanced("") => [true, 0, 0]
isBalanced("(([()]))") => [true, 4, 0]
isBalanced("({)}") => [false, 4, 0]
```

### Constraints:

```
25 <= string length <= 250
Input: string
Output: Array [if balanced (bool), number of balanced braces, number of leftover braces]
Edge Cases: string could be empty
```

> expert - *