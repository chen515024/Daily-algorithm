function findSmallest (arr) {
  let smallest = arr[0], smallest_index = 0;

  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}


// 时间复杂度：O(n²)
// 空间复杂度：O(n)
function selectionSort (arr) {
  const newArr = [];
  const len = arr.length;
  for (let i = 0; i < len; i ++) {
    const smallest = findSmallest(arr);
    
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  
  return newArr;
}

const arr = [1, 2, 3, 12, 22, 39, 9, 0];

console.log(selectionSort(arr));