const removeElement = (nums, val) => {
  const n = nums.length;

  if (n <= 0) {
    return n;
  }

  let j = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }

  console.log(nums);

  return j;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];

const val = 2;

console.log(removeElement(nums, val));
