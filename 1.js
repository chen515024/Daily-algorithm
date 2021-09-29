const twoSum = (nums, target) => {
  const length = nums.length;
  const map = new Map();
  for (let i = 0; i < length; i ++) {
    const key = target - nums[i];

    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(key, i);
    }
  }
}

const nums = [3, 2, 4];
const target = 6

console.log(twoSum(nums, target));
