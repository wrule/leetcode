
class MyPromise<T> {
  public constructor(
    private readonly executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {

  }
}

const a = new Promise<number>()
// executor: (resolve: (value: number | PromiseLike<number>) => void, reject: (reason?: any) => void) => void