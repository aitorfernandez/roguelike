import { Character } from './Character'
import { mergeWith } from './utils'
import { onStatus } from './onStatus'

const enemyProto = {
  groups: ['enemies'],

  act() {
    console.log(`${this} act patrol`)

    const status = onStatus(this)

    if (typeof status === 'function') {
      status()
    }
  }
}

export function Enemy(props = {}) {
  return Character(mergeWith(enemyProto, props))
}
