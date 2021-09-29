const search = (nums, target) => {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const nums = [0, 1, 2, 5, 10, 15, 22, 30];
const target = 10;

console.log(search(nums, target));
