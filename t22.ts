// Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.
// For example

type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type MyAll<T extends any[], A> = T extends [infer B, ...infer C] ? (
  B extends A ? MyAll<C, A> : false
) : true;

type _Todo1 = MyAll<Test1, 1> // should be same as true
type _Todo2 = MyAll<Test2, 1> // should be same as false
