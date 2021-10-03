const fractionToDecimal = (numerator, denominator) => {
  if (numerator % denominator === 0) {
    // 边缘处理
    return '' + Math.floor(numerator / denominator);
  }
  const ans = [];
  // 判断是否负数
  if (numerator < 0 ^ denominator < 0) {
    ans.push('-');
  }

  // 取整数
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integer = Math.floor(numerator / denominator);
  ans.push(integer);
  ans.push('.');

  // 取小数
  // 存放小数点后的值
  const fractionPart = [];
  // 用于判断是否循环体
  const remainderIndexDic = new Map();
  // 取余
  let remainder = numerator % denominator;
  let index = 0;

  while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
    // 加入map中
    remainderIndexDic.set(remainder, index);
    // 余数 * 10并除以分母，存入数组中
    remainder *= 10;
    fractionPart.push(Math.floor(remainder / denominator));
    remainder %= denominator;
    // 移动索引
    index++;
  }
  // 有循环节
  if (remainder !== 0) {
    // 找到对应索引
    const remainderIndex = remainderIndexDic.get(remainder);
    // 数组中索引位置前面和后面添加括号
    fractionPart.splice(remainderIndex, 0, '(');
    fractionPart.push(')');
  }

  // 拼接字符串
  ans.push(fractionPart.join(''));

  return ans.join('');
}

let numerator = 1, denominator = 2;

console.log(fractionToDecimal(numerator, denominator));
