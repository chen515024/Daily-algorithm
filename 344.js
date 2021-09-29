var reverseString = s => {
  let l = 0, r = s.length - 1;

  const swap = (left, right) => {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
  }

  while (l < r) {
    swap(l, r);
    l++;
    r--;
  }
  
  return s;
}

const s = ['h', 'e', 'l', 'l', 'o'];

console.log(reverseString(s));
