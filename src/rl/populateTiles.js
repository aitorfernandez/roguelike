import { stoneFloor } from './tiles'
import { vector } from './math'

export function populateTiles(map) {
  const tiles = {}

  map.create((x, y, value) => {
    if (value) {
      return
    }

    const pos = vector(x, y)

    tiles[pos] = { ...stoneFloor, pos }
  })

  return tiles
}
