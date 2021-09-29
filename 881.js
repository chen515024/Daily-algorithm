var numRescueBoats = (people, limit) => {
  var length = people.length;
  let num = 0, l = 0, r = length - 1;
  people = people.sort((p, c) => p - c);
  while (l <= r) {
    if (people[l] + people[r] > limit) {
      r -= 1;
    } else {
      l ++;
      r --;
    }
    num ++;
  }

  return num;
}

var people = [3, 2, 2, 1];
var limit = 3;

console.log(numRescueBoats(people, limit));