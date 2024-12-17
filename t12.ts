// Implement a generic First<T> that takes an Array T and returns its first element's type.
// For example:

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [infer P, ...any[]] ? P : never;
type Last<T extends any[]> = T extends [...any[], infer P] ? P : never;

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// Implement a generic Last<T> that takes an Array T and returns its last element.
// For example

type tail1 = Last<arr1> // expected to be 'c'

type tail2 = Last<arr2> // expected to be 1
