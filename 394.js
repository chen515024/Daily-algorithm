// 哈希表
// const interSection = (nums1, nums2) => {
//   // 将两个数组转换为set
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);

//   const result = getSection(set1, set2);

//   function getSection (s1, s2) {
//     if (s1.size > s2.size) {
//       return getSection(s2, s1);
//     }

//     const intersection = new Set();

//     for (const num of s1) {
//       if (s2.has(num)) {
//         intersection.add(num);
//       }
//     }

//     return [...intersection];
//   }

//   return result;
// }

// 指针
const interSection = function (nums1, nums2) {
  nums1 = nums1.sort((x, y) => x - y);
  nums2 = nums2.sort((x, y) => x - y);

  const n1l = nums1.length, n2l = nums2.length, result = [];
  let n1i = 0, n2i = 0;
  while (n1i < n1l && n2i < n2l) {
    const n1 = nums1[n1i], n2 = nums2[n2i];

    if (n1 === n2) {
      if (result[result.length - 1] !== n1) {
        result.push(n1);
      }
      n1i++;
      n2i++;
    } else if (n1 < n2) {
      n1i++;
    } else {
      n2i++;
    }
  }

  return result;
}

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(interSection(nums1, nums2));
