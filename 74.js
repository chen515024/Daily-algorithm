// // 二分查询
// const searchMatrix = (matrix, target) => {
//   const mLength = matrix.length;
//   const nLength = matrix[0].length;

//   for (let m = 0; m < mLength; m ++) {
//     const mData = matrix[m];
//     // 判断每一个数组中最后一个值与 target 的大小
//     if (mData[nLength - 1] >= target) {
//       if (mData[nLength - 1] === target) return true
//       return search(mData, target);
//     } else {
//       continue;
//     }
//   }

//   return false;
// }

// const search = (nums, target) => {
//   let left = 0, right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor(left + (right - left) / 2);
//     const num = nums[mid];

//     if (num === target) {
//       return true;
//     } else if (num > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
  
//   return false;
// }

const searchMatrix = (matrix, target) => {
  const nLength = matrix[0].length - 1;
  let row = 0, col = nLength;

  while (row < matrix.length || col < 0) {
    const num = matrix[row][col];

    if (num === target) {
      return true;
    } else if (num > target) {
      col --;
    } else {
      row ++;
      // 重置列数
      col = nLength;
    }
  }

  return false;
}

// const matrix = [
//   [1, 3],
// ]
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]

const target = 13;

console.log(searchMatrix(matrix, target));
