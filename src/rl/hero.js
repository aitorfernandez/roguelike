import { Character } from './Character'
import { director } from './director'

export const hero = Character({
  groups: ['hero'],

  ch: '@',
  fg: '#fff',
  name: 'You!',

  fov: 6,

  act() {
    console.log(`${this} act`)
    director.engine.lock()
  }
})
