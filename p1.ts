
enum MyPromiseState {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

class MyPromise<T> {
  public constructor(
    private readonly executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {

  }

  private state = MyPromiseState.PENDING;

  public then(
    onfulfilled?: ((value: number) => number | PromiseLike<number>) | null,
    onrejected?: ((reason: any) => PromiseLike<never>) | null,
  ) {

  }

  public catch() {

  }

  public finally() {

  }
}

const a = new Promise<number>(null as any);
a.then()