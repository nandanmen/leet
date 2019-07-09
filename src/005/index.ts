function isPalindrome(s: string) {
  let hi = s.length - 1
  let lo = 0
  while (lo < hi) {
    if (s[hi--] !== s[lo++]) {
      return false
    }
  }
  return true
}

/**
 * Given a string s, finds the longest palindrome in s
 * using brute force.
 * @summary
 *  - Runtime: `O(n^3)`
 *  - Leetcode stats: Time limit exceeded
 */
export function longestPalindromeNonOptimal(s: string) {
  if (s.length <= 1) return s

  let longestSoFar = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const substr = s.slice(i, j + 1)
      if (isPalindrome(substr) && substr.length > longestSoFar.length) {
        longestSoFar = substr
      }
    }
  }
  return longestSoFar.length ? longestSoFar : s[0]
}

function makeTableFromString(s: string) {
  const table: boolean[][] = Array.from({ length: s.length }, () =>
    new Array(s.length).fill('')
  )

  for (let i = 0; i < s.length; i++) {
    table[i][i] = true
    if (i < s.length - 1) {
      table[i][i + 1] = s[i] === s[i + 1]
    }
  }

  for (let i = s.length - 3; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      table[i][j] = table[i + 1][j - 1] && s[i] === s[j]
    }
  }

  return table
}

/**
 * Given a string s, finds the longest palindrome in s
 * using dynamic programming.
 * @summary
 *  - Runtime: `O(n^2)`
 *  - Memory: `O(n^2)`
 *  - Leetcode stats:
 *    - Runtime: `492ms` (16.37 percentile)
 *    - Memory: `128.1mb` (5.45 percentile)
 */
export default function longestPalindrome(s: string) {
  const table = makeTableFromString(s)

  let result = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1)
      if (table[i][j] && substr.length > result.length) {
        result = substr
      }
    }
  }

  return result
}
