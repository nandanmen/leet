import addTwoNumbers, { Node } from '.'

function listFromArray(...values) {
  let curr = null
  let head = null
  values.forEach(val => {
    const node = new Node(val)
    if (!head) {
      head = node
    }
    if (curr) {
      curr.next = node
    }
    curr = node
  })
  return head
}

function print(node) {
  const result = []
  let curr = node
  while (curr) {
    result.push(curr.val)
    curr = curr.next
  }
  return result.join(' -> ')
}

describe('add two numbers', () => {
  it('adds two numbers of same number of digits', () => {
    const l1 = listFromArray(2, 4, 3)
    const l2 = listFromArray(5, 6, 4)
    expect(print(addTwoNumbers(l1, l2))).toEqual(`7 -> 0 -> 8`)
  })

  it('adds two numbers of different number of digits', () => {
    const l1 = listFromArray(2, 4, 3)
    const l2 = listFromArray(5, 6, 4, 2, 1)
    expect(print(addTwoNumbers(l1, l2))).toEqual(`7 -> 0 -> 8 -> 2 -> 1`)
  })

  it('adds two numbers of same number of digits with carry at end', () => {
    const l1 = listFromArray(2, 4, 5)
    const l2 = listFromArray(5, 6, 4)
    expect(print(addTwoNumbers(l1, l2))).toEqual(`7 -> 0 -> 0 -> 1`)
  })
})
