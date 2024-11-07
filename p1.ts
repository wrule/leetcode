

class MyPromise<T> {
  public constructor(
    private readonly executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {

  }

  public then(
    onfulfilled?: ((value: number) => number | PromiseLike<number>) | null | undefined,
    onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined,
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
