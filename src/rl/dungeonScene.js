import { crypt } from './crypt'
import { director } from './director'
import { hero } from './hero'
import { Scene } from './Scene'
import { vector } from './math'

const viewport = vector()

function init() {
  crypt.init()

  hero.pos = crypt.getRandomPoint()
}

function update() {
  const {
    width: wSize,
    height: hSize
  } = director.winSize
  const {
    width: wLevel,
    height: hLevel
  } = crypt.getLevelSize()

  viewport.x = Math.max(0, hero.pos.x - (wSize / 2))
  viewport.x = Math.min(viewport.x, wLevel - wSize)

  viewport.y = Math.max(0, hero.pos.y - (hSize / 2))
  viewport.y = Math.min(viewport.y, hLevel - hSize)
}

function draw(display) {
  crypt.draw(
    display, viewport
  )
  hero.draw(
    display, viewport
  )
}

export const dungeonScene = Scene({
  init,
  update,
  draw
})
