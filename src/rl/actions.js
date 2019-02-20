import { hero } from './hero'

export function move(actor) {
  return () => {
    if (actor.isWalkable) {
      actor.move(hero)
    }
  }
}
