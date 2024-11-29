
const fn = (v: boolean) => {
  if (v) return '1';
  else return '2';
}

type a = ReturnType<typeof fn>;
