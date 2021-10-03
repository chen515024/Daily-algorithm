const twoSum = (numbers, target) => {
  const n = numbers.length;

  if (n <= 2) {
    return [1, 2];
  }

  const map = new Map();

  for (let i = 0; i < n; i ++) {
    const remain = target - numbers[i];

    if (map.has(numbers[i])) {
      const index = map.get(numbers[i]) + 1;
      return [index, i + 1];
    } else {
      map.set(remain, i);
    }
  }
}

const nums = [2, 7, 11, 15];

const target = 9;

console.log(twoSum(nums, target));