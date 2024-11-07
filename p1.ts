

function main() {
  const a = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(1234);
    }, 1000);
  });
  a.then(console.log);
  a.then(console.log);
  a.then(console.log);
}

main();
