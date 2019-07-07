import lengthOfLongestSubstring from '.'

const cases: [string, number][] = [
  ['abcabcbb', 3],
  ['dvdf', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
  ['ab', 2],
  ['', 0],
  [' ', 1]
]

describe('longest non-repeating substring', () => {
  test.each(cases)('given %s returns %d', (input, expected) => {
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(expected)
  })
})
