const moveZeros = nums => {
  const length = nums.length;

  let slowIndex = 0;

  for (let fastIndex = 0; fastIndex < length; fastIndex ++) {
    if (nums[fastIndex] !== 0) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }

  for (let i = slowIndex; i < length; i ++) {
    nums[i] = 0;
  }
  console.log(nums);
}

let nums = [0, 1, 0, 3, 12];

// nums = [1, 2, 3, 0, 9, 40, 23, 33, 0, 0];

moveZeros(nums);
