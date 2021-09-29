const removeDuplicates = nums => {
  const n = nums.length;

  let j = 2;
  
  for (let i = 2; i < n; i ++) {
    if (nums[j - 2] !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }

  console.log(nums);

  return j;
}

const nums = [0,0,1,1,1,1,2,3,3];

console.log(removeDuplicates(nums));