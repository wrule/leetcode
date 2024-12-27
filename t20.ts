// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// For example

type TrimLeft<T extends string> = T extends `${infer A}${infer B}` ? B : never;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
