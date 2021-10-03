const generate = numRows => {
  // 暴力解法
  if (numRows <= 1) {
    return [[1]];
  }

  // const arr = [
  //   [1],
  //   [1, 1]
  // ];
  // let i = 2;
  
  // while (i < numRows) {
  //   const temp = [1], tempArr = arr[i - 1];
  //   let l = 0, r = 1, n = tempArr.length;

  //   while (l < n && r < n) {
  //     const sum = tempArr[l] + tempArr[r];
  //     temp.push(sum);
  //     l++;
  //     r++;
  //   }

  //   temp.push(1);
  //   arr.push(temp);
  //   i++;
  // }

  // return arr;

  // 优化
  const arr = [
    [1],
    [1, 1]
  ];

  for (let i = 2; i < numRows; i ++) {
    const temp = [1];
    // 判断当前的 i 是奇数还是偶数
    const isEven = i % 2 === 0;
    const mid = Math.floor(i / 2);
    // 如果是偶数，直接在中间位置插入数值
    if (isEven) {
      const val = arr[i - 1][mid - 1] + arr[i - 1][mid];
      temp[mid] = val;
    }
    for (let j = 0; j < mid - isEven; j ++) {
      const val = arr[i - 1][j] + arr[i - 1][j + 1];
      temp[j + 1] = val;
      temp[i - (j + 1)] = val;
    }
    temp.push(1);
    arr.push(temp);
  }
  return arr;
}

console.log(generate(5));