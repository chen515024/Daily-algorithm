const computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  // 1.计算出两个矩形的面积
  const area1 = (ax2 - ax1) * (ay2 - ay1), area2 = (bx2 - bx1) * (by2 - by1);
  // 2.计算出没有被重叠的矩形的面积
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1),
  overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
  // 可能两个矩形没有重叠，所以最小值为0
  const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0);
  // 3.两个矩形的面积和 - 重叠的矩形面积
  return area1 + area2 - overlapArea;
};

const size = computeArea(
  -3,
  0,
  3,
  4,
  0,
  -1,
  9,
  2
);

console.log(size);
