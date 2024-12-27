// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// For example

type WhitespaceString = ' ' | '\t' | '\n' | '\r';

type TrimLeft<T extends string> =
  T extends `${WhitespaceString}${infer R}` ? TrimLeft<R> : T;

type TrimRight<T extends string> =
  T extends `${infer L}${WhitespaceString}` ? TrimRight<L> : T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
// For example

type Trim<T extends string> = TrimRight<TrimLeft<T>>;

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
