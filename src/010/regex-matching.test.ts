import isMatch from '.'

const cases: [string, string, boolean][] = [
  ['', '', true],
  ['ab', 'ab*', true],
  ['ab', 'ab.', false],
  ['ab', 'ab.*', true],
  ['aaaabc', 'a*bc', true],
  ['bc', 'a*bc', true],
  ['aa', 'a', false],
  ['aa', 'a*', true],
  ['ab', '.*', true],
  ['aab', 'c*a*b', true],
  ['mississippi', 'mis*is*p*.', false]
]

describe('is match', () => {
  test.each(cases)('given s = %s and regex = %s returns %s', (a, b, result) =>
    expect(isMatch(a, b)).toBe(result)
  )
})
