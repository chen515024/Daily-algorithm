// https://leetcode-cn.com/problems/longest-palindromic-substring/
// function isPalindromic (s) {
//   const len = s.length;
//   for (let i = 0; i < len / 2; i ++) {
//     if (s[i] !== s[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function longestPlaindrome (s) {
//   let ans = "";
//   let max = 0;

//   const len = s.length;

//   for (let i = 0; i < len; i ++) {
//     for (let j = i + 1; j <= len; j++) {
//       const test = s.substring(i, j);
//       if (isPalindromic(test) && test.length > max) {
//         ans = test;
//         max = Math.max(max, ans.length);
//       }
//     }
//   }
  
//   return ans;
// }

// function longestPlaindrome (s) {
//   const length = s.length;
//   if (length <= 0) {
//     return ''
//   }
//   const reverse = s.split("").reverse().join("");
//   let maxLen = 0, maxEnd = 0;
//   const arr = [];
//   for (let i = 0; i < length; i ++) {
//     arr.push([]);
//     for (let j = 0; j < length; j ++) {
//       const L = s[i], R = reverse[j];
//       if (L === R) {
//         if (i === 0 || j === 0) {
//           arr[i][j] = 1;
//         } else {
//           arr[i][j] = arr[i - 1][j - 1] + 1;
//         }
//       }

//       if (arr.length > 0 && arr[i][j] > maxLen) {
//         maxLen = arr[i][j];
//         maxEnd = i;
//       }
//     }
//   }

//   return s.substring(maxEnd - maxLen + 1, maxEnd + 1);
// }

let s;
/**
 * 采用动态规划校验文字是否是回文
 * @param {string} s 校验的文字
 * @returns string
 */
// function longestPlaindrome (s) {
//   const length = s.length;
//   if (length <= 1) {
//     return s;
//   }
//   let maxLen = 0, maxEnd = 0;
  
//   const reverse = s.split("").reverse().join("");

//   const arr = {};
//   for (let i = 0; i < length; i ++) {
//     for (let j = length - 1; j >= 0; j --) {
//       const L = s[i], R = reverse[j];
//       if (L === R) {
//         if (i === 0 || j === 0) {
//           arr[j] = 1;
//         } else {
//           arr[j] = arr[j - 1] + 1;
//         }
//       } else {
//         arr[j] = 0;
//       }

//       if (arr[`${i}${j}`] > maxLen) {
//         const beforePev = length - 1 - j;
//         if (beforePev + arr[`${i}${j}`] - 1 === i) {
//           maxLen = arr[`${i}${j}`];
//           maxEnd = i;
//         }
//       }
//       console.log(arr);
//     }
//   }
//   return s.substring(maxEnd - maxLen + 1, maxEnd + 1);
// }

function longestPlaindrome (s) {
  const length = s.length;
  if (length <= 1) {
    return s;
  }
  let maxStart = 0, maxEnd = 0, maxLen = 1;
  const db = {};

  for (let r = 1; r < length; r ++) {
    for (let l = 0; l < r; l ++) {
      if (s[l] === s[r] && (r - l <= 2 || db[`${l + 1}${r - 1}`])) {
        db[`${l}${r}`] = true;
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxStart = l;
          maxEnd = r;
        }
      }
    }
  }

  return s.substring(maxStart, maxEnd + 1);
}

s = "asodioixcuopqwjenp";

console.log(longestPlaindrome(s));
