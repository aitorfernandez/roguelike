import { Character } from './Character'
import { mergeWith } from './utils'

const enemyProto = {
  groups: ['enemies'],

  act() {
    console.log(`${this} act`)
  }
}

export function Enemy(props = {}) {
  return Character(mergeWith(enemyProto, props))
}
