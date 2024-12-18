// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
// For example

type a_arr1 = ['a', 'b', 'c', 'd']
type a_arr2 = [3, 2, 1]

type Pop<T extends any[]> = T extends [...(infer P), any] ? P : never;

type re1 = Pop<a_arr1>;
type re2 = Pop<a_arr2>;

// Extra: Similarly, can you implement Shift, Push and Unshift as well?

// ----分割线---
// For given a tuple, you need create a generic Length, pick the length of the tuple
// For example:

type tesla = ['tesla', 'model 3', 'model X', 'model Y']

type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends any[]> = T['length'];

type teslaLength = Length<tesla>  // expected 4

type spaceXLength = Length<spaceX> // expected 5
