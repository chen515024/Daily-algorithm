// 时间复杂度：O(logn)
// 空间复杂度：O(logn)
const binary_search = (list, item) => {
  console.time('timer');
  let low = 0, high = list.length - 1, searchNum = 0, tag = null;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess < item) {
      low = mid + 1;
      searchNum++;
    } else if (guess > item) {
      high = mid - 1;
      searchNum++;
    } else {
      tag = mid;
      break;
    }
  }

  console.timeEnd('timer');

  console.log('searchNum: ', searchNum);
  
  return tag;
}

const list = new Array(10000).fill(null).map((_v, i) => ++i);

const num = 3;

console.log(binary_search(list, num));