import { Map } from 'rot-js'

import { director } from './director'
import { populateEnemies } from './populateEnemies'
import { populateTiles } from './populateTiles'

export function Level(
  // TODO: level and area
) {
  const {
    width,
    height
  } = director.winSize

  const levelSize = {
    width: width * 2,
    height: height * 2
  }

  const map = new Map.Digger(
    levelSize.width, levelSize.height /* TODO: corridorLength */
  )

  const tiles = populateTiles(map)
  const enemies = populateEnemies(tiles /* TODO: level */)

  const rooms = map.getRooms()

  return {
    levelSize,
    rooms,
    tiles,
    enemies
  }
}
