import { hero } from './hero'

export function move(actor) {
  return () => {
    if (actor.isWalkable) {
      actor.move(hero)
    }
  }
}

export function interact() {
  return () => {
    // TBD
  }
}

export function pickUp() {
  return () => {
    // TBD
  }
}

export function use() {
  return () => {
    // TBD
  }
}
