import * as fs from 'fs'
import map from './map'

export const root = 'src'

export const checkIfProblemExists = (name: string, number: number) => {
  return map.has(name) || map.has(number)
}

export const getFirstEmptyIndex = () => {
  const problems = fs.readdirSync(root).map(Number)

  if (!problems.length) return 1

  for (let i = 0; i < problems.length; i++) {
    if (problems[i + 1] - problems[i] > 1) {
      return problems[i] + 1
    }
  }
  return problems[problems.length - 1] + 1
}

export const noop = () => {}
