import { Character } from './Character'
import { director } from './director'

export const hero = Character({
  groups: ['hero'],

  ch: '@',
  fg: '#fff',
  name: 'You!',

  act() {
    console.log(`${this} act`)
    director.engine.lock()
  }
})
