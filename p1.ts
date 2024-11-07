
enum MyPromiseState {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
};

type OnFulfilled<T> = (value: T) => T;
type OnRejected<T> = (reason: any) => PromiseLike<never>;

class MyPromise<T> {
  public constructor(
    private readonly executor: (
      resolve: (value: T) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {
    try {
      this.executor(
        (value) => this.resolve(value),
        (reason) => this.reject(reason),
      );
    } catch (error) {
      this.reject(error);
    }
  }

  private state = MyPromiseState.PENDING;
  private value!: T;
  private reason: any;
  private onfulfilledList: OnFulfilled<T>[] = [];
  private onrejectedList: OnRejected<T>[] = [];

  private resolve(value: T) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.FULFILLED;
      this.value = value;
      this.onfulfilledList.forEach((onfulfilled) => {
        onfulfilled(this.value);
      });
    }
  }

  private reject(reason?: any) {
    if (this.state === MyPromiseState.PENDING) {
      this.state = MyPromiseState.REJECTED;
      this.reason = reason;
      this.onrejectedList.forEach((onrejected) => {
        onrejected(this.reason);
      });
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
  const a = new MyPromise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(1234);
    }, 1000);
  });
  a.then((value) => {
    console.log(value);
    return value;
  });
}

test();
