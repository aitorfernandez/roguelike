import { FOV } from 'rot-js'

import { vector } from './math'
import { hero } from './hero'

let fov = {}

export function getFov() {
  return fov
}

export function calculateFov(dungeon) {
  // Input callback, passed as a constructor argument, which provides visiblity information
  const lightPasses = (x, y) => {
    const pos = vector(x, y)
    return !dungeon.getActorAt(pos).opaque
  }

  const shadowcasting = new FOV.PreciseShadowcasting(lightPasses)

  fov = {}

  // Output callback, passed as an argument to the compute method, which receives FOV data
  const cb = (x, y) => {
    const pos = vector(x, y)
    fov[pos] = pos
  }

  const { x, y } = hero.pos
  shadowcasting.compute(x, y, hero.fov, cb)
}
