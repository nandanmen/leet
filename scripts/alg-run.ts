import { exec } from 'child_process'

export default function runAlg() {
  exec('leetcode user -l', (err, stdout, stderr) => {
    if (err) return
    console.log(stdout)
  })
}
