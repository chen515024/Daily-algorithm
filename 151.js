const reverWords = s => {
  s = s.trim();
  const n = s.length;
  let str = '', strArr = [], word = '';
  
  for (let i = 0; i <= n; i ++) {
    if (i !== n && s[i] !== ' ') {
      word += s[i];
    } else if (word) {
      strArr.unshift(word);
      word = '';
    }
  }
  const length = strArr.length;

  for (let i = 0; i < length; i ++) {
    str += strArr[i] + ' ';
  }

  return str;
}

const s = "the sky is blue";

console.log(reverWords(s));
