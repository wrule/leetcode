
function curry(fn: Function) {
  console.log(fn.length);
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

curry(sum);
