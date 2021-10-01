function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
  let head = null, tail = null, carry = 0;

  while (l1 || l2) {
    // 获取当前的值
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    // 左值 + 右值 + 进位
    const sum = n1 + n2 + carry;
    // 因为不会大过9，所以直接去个位数即可
    const val = sum % 10;
    if (!head) {
      head = tail = new ListNode(val);
    } else {
      tail.next = new ListNode(val);
      tail = tail.next;
    }
    // 进位数重置
    carry = Math.floor(sum / 10);

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }
  // 最后一位的值需要进位，所以需要再添加一个 ListNode
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  return head;
}

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9
    )
  )
)

const l2 = new ListNode(
  9,
  new ListNode(
    0,
    new ListNode(
      9
    )
  )
)

console.log(addTwoNumbers(l1, l2));
