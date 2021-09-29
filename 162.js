const findPeakElement = nums => {
  const n = nums.length;
  let left = 0, right = n - 1, ans = -1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
      ans = mid;
      break;
    }

    if (compare(nums, mid, mid + 1) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

const get = (nums, idx) => {
  if (idx === -1 || idx === nums.length) {
    return [0, 0];
  }
  return [1, nums[idx]];
}

const compare = (nums, idx1, idx2) => {
  const num1 = get(nums, idx1);
  const num2 = get(nums, idx2);

  if (num1[0] !== num2[0]) {
    return num1[0] > num2[0] ? 1 : -1;
  }

  if (num1[1] === num2[1]) {
    return 0;
  }

  return num1[1] > num2[1] ? 1 : -1;
}

const nums = [1];

console.log(findPeakElement(nums));
