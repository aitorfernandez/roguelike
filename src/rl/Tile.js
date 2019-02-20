import { Actor } from './Actor'
import { mergeWith } from './utils'

const tileProto = {
  groups: ['tiles'],
  // all tiles are walkables by default
  isWalkable: true,

  move(actor) {
    actor.pos = this.pos
  }
}

export function Tile(props = {}) {
  return Actor(mergeWith(tileProto, props))
}
