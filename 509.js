const fib = n => {
  const map = {};

  function loop (num) {

    if (num < 2) {
      return num === 1 ? 1 : 0;
    }

    if (!map[num]) {
      const sum = loop(num - 1) + loop(num - 2);
      map[num] = sum;
    }

    return map[num];
  }

  return loop(n);
}

const n = 20

console.log(fib(n));
