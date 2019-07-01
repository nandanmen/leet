const fs = require('fs')

const MAP_FILE = './map.json'

let data

function noop() {}

function makeMapFile() {
  console.log('writing file')
  fs.writeFileSync(
    MAP_FILE,
    JSON.stringify(
      {
        numberToName: {},
        nameToNumber: {}
      },
      null,
      2
    ),
    'utf-8'
  )
}

function readMapFile() {
  if (!data) {
    data = JSON.parse(fs.readFileSync(MAP_FILE, 'utf-8'))
  }
  return data
}

function writeMapFile(data) {
  fs.writeFile(MAP_FILE, JSON.stringify(data, null, 2), 'utf-8', noop)
}

function set(number, name) {
  const map = readMapFile()
  map.numberToName = {
    ...map.numberToName,
    [number]: name
  }
  map.nameToNumber = {
    ...map.nameToNumber,
    [name]: number
  }
  writeMapFile(map)
}

function get(numberOrName) {
  const map = readMapFile()
  if (typeof numberOrName === 'number') {
    return map.numberToName[numberOrName]
  } else if (typeof numberOrName === 'string') {
    return map.nameToNumber[numberOrName]
  }
}

function has(numberOrName) {
  return get(numberOrName) !== undefined
}

module.exports = (function() {
  if (!fs.existsSync(MAP_FILE)) {
    makeMapFile()
  }
  return {
    set,
    get,
    has
  }
})()
