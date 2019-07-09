/**
 * Given an input string s and a pattern p, implement
 * regular expression matching with support for '.' and '*'.
 *
 * The matching should cover the entire input string
 * (not partial).
 */
function isMatch(s: string, p: string): boolean {
  if (s.length !== p.length) return false

  let i = 0,
    j = 0
  while (i < s.length && j < p.length) {
    if (s[i++] !== p[j++]) return false
  }
  return true
}

export default isMatch
