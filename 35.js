const searchInster = (nums, target) => {
  let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const num = nums[mid];

        if (num === target) {
            return mid;
        } else if (num > target) {
            if (mid === 0) {
                return mid;
            } else if (nums[mid - 1] < target) {
                return mid;
            } else {
                right = mid - 1;
            }
        } else {
            left = mid + 1;
        }
    }

    return nums.length;
}

const nums = [
  [1, 3, 5, 6],
  [1],
];


console.log(searchInster(nums[1], 2));

