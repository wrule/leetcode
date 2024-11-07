

class MyPromise<T> {
  public constructor(
    private readonly executor: (resolve: (value: number | PromiseLike<number>) => void, reject: (reason?: any) => void) => void,
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
