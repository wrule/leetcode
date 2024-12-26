// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.
// For example

type RequiredKeys<T extends object> = keyof {
  [K in keyof T as (undefined extends T[K] ? never : K)]: T[K]
}

type Result1 = RequiredKeys<{ foo: number; bar?: string }>;

type B1 = {
  a?: number;
  b: string;
}

type C1 = keyof {
  [K in keyof B1 as undefined extends B1[K] ? never : K]: B1[K];
};
// expected to be “foo”

// ----我是分割线---
// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
// For example

type CapitalizeJimao<T extends string> = T extends `${infer F}${infer O}` ? `${Uppercase<F>}${O}` : T;
type capitalized = CapitalizeJimao<'jimao web3'> // expected to be 'Hello world'
