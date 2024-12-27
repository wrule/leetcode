// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// For example

type WhitespaceString = ' ' | '\t' | '\n' | '\r';
type TrimLeft<T extends string> =
  T extends `${WhitespaceString}${infer R}` ? TrimLeft<R> : T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '


// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
// For example

type Trim<T extends string> =
  T extends `${WhitespaceString}${infer M}${WhitespaceString}` ? Trim<M> : T;

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
