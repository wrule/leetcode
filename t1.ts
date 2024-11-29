
const fn = (v: boolean) => {
  if (v) return '1';
  else return '2';
}

type MyFunction = (...args: any[]) => any;

type MyReturnType<T extends MyFunction> = T extends (...args: any[]) => infer R ?
  R :
  never;

type a = MyReturnType<typeof fn>;
