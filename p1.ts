
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
    try {
      this.executor(this.resolve, this.reject);
    } catch (error) {
      this.state = MyPromiseState.REJECTED;
      this.reject(error);
    }
  }

  private state = MyPromiseState.PENDING;
  private value!: T | PromiseLike<T>;
  private error: any = null;

  private resolve(value: T | PromiseLike<T>) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.FULFILLED;
      this.value = value;
    }
  }

  private reject(reason?: any) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.REJECTED;
      this.error = reason;
    }
  }

  private then_onfulfilled: (((value: T) => T | PromiseLike<T>) | null)[] = [];
  private then_onrejected: (((reason: any) => PromiseLike<never>) | null)[] = [];
  public then(
    onfulfilled?: ((value: T) => T | PromiseLike<T>) | null,
    onrejected?: ((reason: any) => PromiseLike<never>) | null,
  ): MyPromise<T> {
    if (onfulfilled) {
      this.then_onfulfilled.push(onfulfilled);
    }
    if (onrejected) {
      this.then_onrejected.push(onrejected);
    }
    return this;
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

// const a = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1234);
//   }, 1000);
// });

// async function main() {
//   a.then((result) => {
//     console.log('then1', result);
//     throw '新错误1';
//   }, (reason) => {
//     console.log('then2', reason);
//     throw '新错误2';
//   }).catch((reason) => {
//     console.log('catch', reason);
//     throw '新错误3';
//   }).finally(() => {
//     console.log('finally');
//   });
// }

// main();
