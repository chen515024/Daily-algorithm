const findMaxConsecutiveOnes = (nums) => {
  let i = 0, j = 0, count = 0;
  const length = nums.length;
  // 循环数组，出现1时记录，当0时清除，如果大于最大值时替换最大值
  while (i < length) {
    const num = nums[i];

    if (num === 1) {
      j++;
    } else {
      j = 0;
    }

    count = count > j ? count : j;
    i ++;
  }

  return count;
}

const a = [1, 1, 0, 0, 1, 1, 1];
const b = [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1];

const num = findMaxConsecutiveOnes(b);

console.log(num);