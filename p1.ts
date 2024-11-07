

function test() {
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
