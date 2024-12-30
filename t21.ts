// Implement Replace<S, From, To> which replace the string From with To once in the given string S
// For example

type Replace<A extends string, B extends string, C extends string> =
  A extends `${infer D}${B}${infer E}` ? `${D}${C}${E}` : A;

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

// ---我是分割线---

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
// For example

type ReplaceAll<A extends string, B extends string, C extends string> =
  A extends `${infer D}${B}${infer E}` ? ReplaceAll<`${D}${C}${E}`, B, C> : A;

type replaced1 = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
