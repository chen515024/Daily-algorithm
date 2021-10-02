const toHex = nums => {
  const numArr = [];
  // 将16进制转换为2进制
  /*
    一位16进制对应四位2进制，所以32位的符号整数的16进制数有8位
    将 nums 按四位一组分为8组，依次转换为16进制
    如果是0-9，数字本身就是16进制
    如果是10到15，将其转换为 a-f 中对应的字母
  */
  // 最多有8组，所以默认8-1，从低位往高位
  for (let i = 7; i >= 0; i --) {
    const num = (nums >> (4 * i)) & 0xf;
    if (num > 0) {
      const val = num >= 10 ? `a${num - 10}` : `0${num}`;
      numArr.push(val);
    }
  }
  return numArr.join('');
}

const nums = 26;

console.log(toHex(nums));