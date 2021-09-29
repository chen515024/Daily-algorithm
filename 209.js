const minSubArrayLen = (s, nums) => {
  const n = nums.length;

  let start = 0, end = 0, ans = Number.MAX_SAFE_INTEGER, sum = 0;

  while (end < n) {
    sum += nums[end];
    while (sum >= s) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start ++;
    }
    end ++;
  }

  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

const target = 11;
const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1];

console.log(minSubArrayLen(target, nums));