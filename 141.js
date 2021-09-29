function ListNode (val) {
  this.val = val;
  this.next = null;
}

// 是否有环形链表
var hasCycle = head => {
  let pop = null;
  let s = head, f = head;

  while (f) {
    if (f.next === null) {
      return false;
    }

    s = s.next;
    f = f.next.next;
    
    if (f === s) {
      pop = s;
      return true;
    }
  }

  return !!pop >>> 0;
}

var list = new ListNode(1);
list.next = new ListNode(2);

console.log(list, 'list');
console.log(hasCycle(list));
