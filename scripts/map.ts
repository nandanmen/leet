import * as fs from 'fs'
import { noop } from './util'

const MAP_FILE = './map.json'

interface IAlgMap {
  numberToName: Record<number, string>
  nameToNumber: Record<string, number>
}

const initialMap: IAlgMap = {
  numberToName: {},
  nameToNumber: {}
}

class AlgMap {
  data: IAlgMap
  pathToMapFile: string

  constructor(path: string) {
    if (!fs.existsSync(path)) {
      AlgMap.makeMapFile(path)
    }
    this.pathToMapFile = path
    this.data = JSON.parse(fs.readFileSync(path, 'utf-8'))
  }

  static makeMapFile(path: string) {
    fs.writeFileSync(path, JSON.stringify(initialMap, null, 2), 'utf-8')
  }

  write() {
    fs.writeFile(
      this.pathToMapFile,
      JSON.stringify(this.data, null, 2),
      'utf-8',
      noop
    )
  }

  set(number: number, name: string): AlgMap {
    const map = this.data
    map.numberToName = {
      ...map.numberToName,
      [number]: name
    }
    map.nameToNumber = {
      ...map.nameToNumber,
      [name]: number
    }
    return this
  }

  get(numberOrName: string | number) {
    const map = this.data
    if (typeof numberOrName === 'number') {
      return map.numberToName[numberOrName]
    } else if (typeof numberOrName === 'string') {
      return map.nameToNumber[numberOrName]
    }
  }

  has(numberOrName: string | number) {
    return this.get(numberOrName) !== undefined
  }
}

export default new AlgMap(MAP_FILE)
