const flatten = head => {
  
  const dfs = node => {
    let cur = node;
    let lastNode = null;

    while (cur) {
      let next = cur.next;

      if (cur.child) {
        const lastChild = dfs(cur.child);
        next = cur.next;
        cur.next = cur.child;
        cur.child.prev = cur;

        if (next !== null) {
          lastChild.next = next;
          next.prev = lastChild;
        }

        cur.child = null;
        last = lastChild;
      } else {
        lastNode = cur;
      }

      cur = next;
    }

    return lastNode;
  }

  dfs(head);
  return head;
}
