import longestPalindrome from '.'

const cases = [
  ['', ''],
  ['a', 'a'],
  ['ac', 'a'],
  ['babad', 'bab'],
  ['cbbd', 'bb'],
  ['abadd', 'aba'],
  ['cababac', 'cababac']
]

describe('longest palindrome', () => {
  test.each(cases)(`given %s, returns %s`, (input, expected) => {
    expect(longestPalindrome(input)).toEqual(expected)
  })
})
