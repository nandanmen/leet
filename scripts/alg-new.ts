import * as path from 'path'
import * as fs from 'fs'
import map from './map'
import { root, checkIfProblemExists, getFirstEmptyIndex } from './util'

function makeFiles(name: string, rootFilePath: string) {
  fs.mkdir(rootFilePath, () => {
    const files = ['index.ts', `${name}.test.ts`]

    files.forEach(file => {
      const pth = path.join(rootFilePath, file)
      fs.writeFile(pth, '', 'utf-8', () => {
        console.log(`Created ${pth}`)
      })
    })
  })
}

type NewAlgArgs = {
  name: string
  number?: number
}

function newAlg({ name, number }: NewAlgArgs) {
  const algNumber = number || getFirstEmptyIndex()

  const problemExists = checkIfProblemExists(name, algNumber)
  if (problemExists) {
    return console.error(
      'A problem with that number already exists. Please provide a different number or leave out the --number option.'
    )
  }

  let folderNumber = String(algNumber)
  if (folderNumber.length < 3) {
    folderNumber = folderNumber.padStart(3, '0')
  }

  makeFiles(name, path.join(root, folderNumber))
  map.set(algNumber, name).write()
}

export default newAlg
