import { KEYS } from 'rot-js'

import { vector } from './math'

const positions = {
  [KEYS.VK_DOWN]: vector(0, 1),
  [KEYS.VK_LEFT]: vector(-1, 0),
  [KEYS.VK_RIGHT]: vector(1, 0),
  [KEYS.VK_UP]: vector(0, -1)
}

export function getPositions({
  type, keyCode
}) {
  return type === 'keydown' && positions[keyCode]
}
