const fib = n => {

  if (n < 2) {
    return n;
  }

  const mod = 1e9 + 7;

  let p = 0, q = 0, r = 1;
  for (let i = 2; i <= n; i ++) {
    p = q;
    q = r;
    r = (p + q) % mod;
  }

  return r;
}

const n = 81;

console.log(fib(n));