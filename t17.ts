const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

function PromiseAll<T extends unknown[]>(values: T):
  Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>
{
  return Promise.all(values) as any;
}

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
