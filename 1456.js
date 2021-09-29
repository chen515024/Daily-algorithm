// 滑动窗口
const maxVowels = (s, k) => {
  const length = s.length;
  
  let vowelCount = 0;
  // 创建窗口
  for (let i = 0; i < k; i ++) {
    if (checkStrHasVowels(s[i])) {
      vowelCount++;
    }
  }
  
  let ans = vowelCount;

  for (let i = k; i < length; i ++) {
    vowelCount += checkStrHasVowels(s[i]) - checkStrHasVowels(s[i - k]);

    ans = Math.max(vowelCount, ans);
  }

  // 判断是否元音字符
  function checkStrHasVowels (str) {
    const isVowel = str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u';

    return isVowel;
  }

  return ans;
}

const s = 'abcdefg';

const k = 3;

console.log(maxVowels(s, k));
