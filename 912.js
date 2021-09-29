const sortArray = nums => {
  const n = nums.length;
  // 冒泡排序
  // bubbleSort(nums);
  // 插入排序
  // insertSort(nums);

  // 归并排序
  const temp = [];
  mergeSort(nums, 0, n - 1, temp);

  return nums;
}

// 递归实现排序
/**
 * 对 arr[l] 到 arr[r] 做归并排序
 *
 * @param {*} arr 
 * @param {*} l
 * @param {*} r
 * @param {*} temp
 * @return {*} 
 */
function mergeSort (arr, l, r, temp) {
  if (l === r) {
    return;
  }

  const mid = Math.floor((l + r) / 2);

  mergeSort(arr, l, mid, temp);
  mergeSort(arr, mid + 1, r, temp);

  mergeOfTwoSortedArray(arr, l, r, mid, temp);
}

function mergeOfTwoSortedArray (nums, l, r, mid, temp) {
  for (let i = l; i <= r; i++) {
    temp[i] = nums[i];
  }

  let i = l, j = mid + 1;

  for (let k = l; k <= r; k++) {
    // 越界处理
    if (i === mid + 1) {
      nums[k] = temp[j];
      j++;
    } else if (j === r + 1) {
      nums[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
    }
  }
}

// 插入排序
function insertSort (nums) {
  const n = nums.length;

  for (let i = 1; i < n; i ++) {
    // 保留当前值
    const temp = nums[i];
    let j;
    // 因为 j 之前的都是已经排好序的，所以 j - 1 一定比 j - 2 大,所以直接比较 j - 1就行，如果比 j - 1 小再比较 j - 2
    for (j = i; j > 0 && nums[j - 1] > temp; j --) {
        nums[j] = nums[j - 1];
    }

    nums[j] = temp;
  }

  return nums;
}

// 冒泡排序
function bubbleSort (nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i ++) {
    for (let j = i + 1; j <= n; j ++) {
      if (nums[i] > nums[j]) {
        swap(i, j);
      }
    }
  }

  function swap (l, r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
  }

  return nums;
}

const nums = [5,1,1,2,0,0];

console.log(sortArray(nums));
