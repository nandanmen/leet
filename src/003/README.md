# Longest Non-Repeating Substring

## Brute Force

```js
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
```