// Implement the advanced util type UnionToIntersection<U>
// For example

type R1 = {
  k: number;
  b: string;
}

type R2 = {
  a: string;
  b: string;
  c: boolean;
}

type R3 = {
  c: boolean;
  b: 'text';
}

type E1 = R1 | R2 | R3;
type E2 = R1 & R2 & R3;

type G1 = {
  [K in keyof E1]: E1[K];
}

type G2 = {
  [K in keyof E2]: E2[K];
}

type Union2Intersection<U> =
(
  U extends any ? (arg: U) => void : never
) extends (args: infer I) => void ?
    I :
    never;

type I = Union2Intersection<E1> // expected to be 'foo' & 42 & true
