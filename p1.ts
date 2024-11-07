
enum MyPromiseState {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
};

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

  private state = MyPromiseState.PENDING;
  private value!: T | PromiseLike<T>;
  private reason: any;
  private onfulfilledList: OnFulfilled<T>[] = [];
  private onrejectedList: OnRejected<T>[] = [];

  private resolve(value: T | PromiseLike<T>) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.FULFILLED;
      this.value = value;
      this.onfulfilledList.forEach((onfulfilled) => {

      });
    }
  }

  private reject(reason?: any) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.REJECTED;
      this.reason = reason;
    }
  }

  public then(
    onfulfilled?: OnFulfilled<T> | null,
    onrejected?: OnRejected<T> | null,
  ) {
    if (onfulfilled) this.onfulfilledList.push(onfulfilled);
    if (onrejected) this.onrejectedList.push(onrejected);
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
