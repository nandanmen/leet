/**
 * Given a string, returns the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @returns {number}
 * @summary
 *  - Runtime: O(n^2)
 *  - Leetcode stats:
 *    - Runtime: 292ms (26.03rd percentile)
 *    - Memory: 41.7mb (36.26th percentile)
 */
export function lengthOfLongestSubstringNonOptimal(s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    const seen = new Set()
    for (let k = i; k < s.length; k++) {
      const curr = s[k]
      if (seen.has(curr)) {
        max = Math.max(max, counter)
        break
      }
      seen.add(curr)
      counter++
      if (k === s.length - 1) {
        max = Math.max(max, counter)
      }
    }
  }
  return max
}

/**
 * Given a string, returns the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @returns {number}
 * @summary
 *  - Runtime: O(n)
 *  - Leetcode stats:
 *    - Runtime: 88ms (87.61st percentile)
 *    - Memory: 38.4mb (83.52nd percentile)
 */
export default function lengthOfLongestSubstring(s) {
  const seen = new Set()
  let max = 0
  let j = 0
  let i = 0

  while (i < s.length && j < s.length) {
    if (!seen.has(s[j])) {
      seen.add(s[j++])
      max = Math.max(max, j - i)
    } else {
      seen.delete(s[i++])
    }
  }

  return max
}
