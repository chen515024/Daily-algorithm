const destCity = paths => {
  const n = paths.length;
  if (n === 1) {
    return paths[0][1];
  }
  // 官方题解
  // const cityA = new Set();
  // for (let i = 0; i < n; i ++) {
  //   cityA.add(paths[i][0]);
  // }

  // for (let i = 0; i < n; i ++) {
  //   if (!cityA.has(paths[i][1])) {
  //     return paths[i][1];
  //   }
  // }

  const map = new Map();
  // 将所有路程存在哈希表中
  for (let i = 0; i < n; i ++) {
    map.set(paths[i][0], paths[i][1]);
  }
  // 假设第一个出发点为旅行的终点站
  let ans = paths[0][0];
  // 如果哈希表中的 key 是终点站，表示还有从这个站出发，所以 value 当做最后的终点站
  while (map.has(ans)) {
    ans = map.get(ans);
  }

  return ans;
}

const paths = [
  // ["B", "C"],
  // ["D", "B"],
  // ["C", "A"]
  ["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]
  // ["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]
];

console.log(destCity(paths));
