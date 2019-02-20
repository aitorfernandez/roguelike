import { Actor } from './Actor'
import { mergeWith } from './utils'

const characterProto = {
  groups: ['characters'],

  speed: 1,

  getSpeed() {
    return this.speed || 0
  }
}

export function Character(props) {
  return Actor(mergeWith(characterProto, props))
}
