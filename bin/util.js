const fs = require('fs')
const map = require('./map')

const root = 'src'

exports.root = root

exports.checkIfProblemExists = (name, number) => {
  return map.has(name) || map.has(number)
}

exports.getFirstEmptyIndex = () => {
  const problems = fs.readdirSync(root).map(Number)

  if (!problems.length) return 1

  for (let i = 0; i < problems; i++) {
    if (problems[i + 1] - problems[i] > 1) {
      return problems[i] + 1
    }
  }
  return problems[problems.length - 1] + 1
}
