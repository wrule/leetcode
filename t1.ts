
const fn = (v: boolean) => {
  if (v) return '1';
  else return '2';
}

type MyFunction = (...args: any[]) => any;

type MyReturnType<T extends MyFunction> = T extends (...args: any[]) => infer R ?
  R :
  never;

type a = MyReturnType<typeof fn>;

type MyAwaited<T> = T extends Promise<infer R> ? R : never;

type b = MyAwaited<Promise<string>>;

const fn2 = (a: number, b: string, c: boolean) => {
  return Symbol.for('jimao');
};

type MyParameters<T extends MyFunction> = T extends (...args: infer R) => any ?
  R :
  never;

type c = MyParameters<typeof fn2>;
