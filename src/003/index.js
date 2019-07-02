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
export default function lengthOfLongestSubstring(s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    const seen = new Set()
    for (let k = i; k < s.length; k++) {
      const curr = s[k]
      if (seen.has(curr)) {
        max = counter > max ? counter : max
        break
      }
      seen.add(curr)
      counter++
      if (k === s.length - 1) {
        max = counter > max ? counter : max
      }
    }
  }
  return max
}
