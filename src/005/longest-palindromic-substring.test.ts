import longestPalindrome from '.'

const cases = [['babad', 'bab'], ['cbbd', 'bb']]

describe('longest palindrome', () => {
  test.each(cases)(`given %s, returns %s`, (input, expected) => {
    expect(longestPalindrome(input)).toEqual(expected)
  })
})
