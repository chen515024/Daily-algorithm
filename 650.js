const minSteps = n => {
  let ans = 0;

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      ans += i;
      n /= i;
    }
  }

  if (n != 1) ans += n;
  
  return ans;
}


const n = 5;

console.log(minSteps(n));
