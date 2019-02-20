import { Actor } from './Actor'
import { mergeWith } from './utils'

const tileProto = {
  groups: ['tiles'],
  // all tiles are walkables by default
  isWalkable: true
}

export function Tile(props = {}) {
  return Actor(mergeWith(tileProto, props))
}
