### Operator Reference Table
| Operator | Operation | Associativity | Types |
|:---:|---|:---:|---|
|++|Pre or post-increment | R | val -> num |
|--|Pre or post-decrement | R | val -> num |
|-|Negate number| R | num -> num |
|!|Invert boolean| R| bool -> bool|
|delete|Remove property of obj| R | val -> bool|
|typeof|Determine type| R| any -> str|
|*, /, %| Multiply,divide,remainder|L|num,num -> num|
|+,-|Add,subtract|L|num,num -> num|
|+|Concatenate string|L|str,str -> str|
|<, <=, >, >=|Compare numeric/apha order| L |num/str, num/str -> bool|
|instanceof| Test object class| L | obj,func -> bool|
|in| Test if property exists| L | str,obj -> bool|
| == | Equality| L | any,any -> bool|
|!=| Inequality| L|any,any -> bool|
|===| Strict equality| L|any,any -> bool|
|!==| Strict inequality| L|any,any -> bool|
|&&|Compute logical AND|L|any,any -> any|
|&#124;&#124;|Compute logical OR|L|any,any -> any|
|? :|Ternary Operator|R|bool,any,any -> any|
|=|Assignment|R|val, any -> any|
|*=, /= , %=, +=, -= | Operate and assign| R | val,any -> any|
  
  
#### Continue to [4 - Labs](4_Labs.md)