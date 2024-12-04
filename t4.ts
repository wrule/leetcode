interface TodoA {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<{ [Q in P]: T[P] }, { readonly [Q in P]: T[P] }> extends true ? P : never]: T[P]
};

type Keys = GetReadonlyKeys<TodoA>;
