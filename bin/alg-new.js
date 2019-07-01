const path = require('path')
const fs = require('fs')
const { root, checkIfProblemExists, getFirstEmptyIndex } = require('./util')

function makeFiles(name, rootFilePath) {
  fs.mkdir(rootFilePath, () => {
    const files = ['index.js', `${name}.test.js`]

    files.forEach(file => {
      const pth = path.join(rootFilePath, file)
      fs.writeFile(pth, '', 'utf-8', () => {
        console.log(`Created ${pth}`)
      })
    })
  })
}

function newAlg({ name, number }) {
  const algNumber = number || getFirstEmptyIndex()

  let folderNumber = String(algNumber)
  if (folderNumber.length < 3) {
    folderNumber = folderNumber.padStart(3, '0')
  }

  const problemExists = checkIfProblemExists(folderNumber)
  if (problemExists) {
    return console.error(
      'A problem with that number already exists. Please provide a different number or leave out the --number option.'
    )
  }

  makeFiles(name, path.join(root, folderNumber))
}

module.exports = newAlg
