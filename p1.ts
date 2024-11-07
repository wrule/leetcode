
// enum MyPromiseState {
//   PENDING = 'PENDING',
//   FULFILLED = 'FULFILLED',
//   REJECTED = 'REJECTED',
// }

// class MyPromise<T> {
//   public constructor(
//     private readonly executor: (
//       resolve: (value: T | PromiseLike<T>) => void,
//       reject: (reason?: any) => void,
//     ) => void,
//   ) {
//     const resolve = (value: T | PromiseLike<T>) => {
//       if (this.state === MyPromiseState.PENDING) {
//         this.state = MyPromiseState.FULFILLED;
//         this.value = value;
//       }
//     };
//     const reject = (reason?: any) => {
//       if (this.state === MyPromiseState.PENDING) {
//         this.state = MyPromiseState.REJECTED;
//       }
//     };
//     try {
//       this.executor(resolve, reject);
//     } catch (error) {
//       this.state = MyPromiseState.REJECTED;
//       reject(error);
//     }
//   }

//   private state = MyPromiseState.PENDING;
//   private value!: T | PromiseLike<T>;
//   private error: any = null;

//   private resolve(value: T | PromiseLike<T>) {
//     if (this.state === MyPromiseState.PENDING) {
//       this.state = MyPromiseState.FULFILLED;
//       this.value = value;
//     }
//   }

//   private reject(reason?: any) {
//     if (this.state === MyPromiseState.PENDING) {
//       this.state = MyPromiseState.REJECTED;
//       this.error = reason;
//     }
//   }

//   public then(
//     onfulfilled?: ((value: T) => T | PromiseLike<T>) | null,
//     onrejected?: ((reason: any) => PromiseLike<never>) | null,
//   ): Promise<T> {
//     throw '';
//   }

//   public catch(
//     onrejected?: ((reason: any) => PromiseLike<never>) | null,
//   ): Promise<T> {
//     throw '';
//   }

//   public finally(
//     onfinally?: (() => void) | null,
//   ): Promise<T> {
//     throw '';
//   }
// }

const a = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(1234);
  }, 1000);
});

async function main() {
  a.then((result) => {
    console.log('then1', result);
  }, (reason) => {
    console.log('then2', reason);
  }).catch((reason) => {
    console.log('catch', reason);
  }).finally(() => {
    console.log('finally');
  });
}

main();
