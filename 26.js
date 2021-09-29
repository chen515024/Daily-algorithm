// 插入排序
const removeDuplicates = nums => {
  const n = nums.length;

  if (n < 2) {
    return n;
  }

  let i = 1, j = 0;

  while (i < n) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
    
    i++;
  }

  return j + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
