
function curry(fn: Function) {
  const nextCurry = (...args: number[]) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs: number[]) => {
      return nextCurry(...args, ...nextArgs);
    };
  };
  return nextCurry;
}


function sum(a: number, b: number, c: number) {
  return a + b + c;
}

console.log(sum(1, 2, 3));
const currySum = curry(sum);
console.log(currySum(1)(2)(3));