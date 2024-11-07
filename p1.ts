
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
    onfulfilled?: ((value: T) => T | PromiseLike<T>) | null,
    onrejected?: ((reason: any) => PromiseLike<never>) | null,
  ): Promise<T> {
    throw '';
  }

  public catch(
    onrejected?: ((reason: any) => PromiseLike<never>) | null,
  ): Promise<T> {
    throw '';
  }

  public finally(
    onfinally?: (() => void) | null,
  ): Promise<T> {
    throw '';
  }
}

const a = new Promise<number>(null as any);
// a.finally()
