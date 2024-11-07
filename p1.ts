

type OnFulfilled<T> = (value: T) => T | PromiseLike<T>;
type OnRejected<T> = (reason: any) => PromiseLike<never>;

class MyPromise<T> {
  public constructor(
    private readonly executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {

  }

  public then(
    onfulfilled?: OnFulfilled<T> | null,
    onrejected?: OnRejected<T> | null,
  ) {

  }
}

function test() {
  // const b = new Promise<number>
  const a = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(1234);
    }, 500);
  });
  a.then(console.log);
  a.then(console.log);
  a.then(console.log);
}

test();
