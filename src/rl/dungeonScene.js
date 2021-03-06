import { calculateFov } from './fov'
import { crypt } from './crypt'
import { director } from './director'
import { hero } from './hero'
import { onAction } from './onAction'
import { Scene } from './Scene'
import { vector } from './math'

const viewport = vector()
let dungeon = null

const dungeons = [
  crypt // TODO: add more dungeons here
]

function init() {
  dungeon = dungeons[0]
  dungeon.init()
  dungeon.schedulerAddEnemies()

  hero.pos = dungeon.getRandomPoint()

  director.scheduler.add(hero, true)
  director.engine.start()
}

function onEnter() {
  calculateFov(dungeon)
}

function update() {
  const {
    width: wSize,
    height: hSize
  } = director.winSize
  const {
    width: wLevel,
    height: hLevel
  } = dungeon.getLevelSize()

  viewport.x = Math.max(0, hero.pos.x - (wSize / 2))
  viewport.x = Math.min(viewport.x, wLevel - wSize)

  viewport.y = Math.max(0, hero.pos.y - (hSize / 2))
  viewport.y = Math.min(viewport.y, hLevel - hSize)
}

function draw(display) {
  dungeon.draw(
    display, viewport
  )
  hero.draw(
    display, viewport
  )
}

function handleInput(event) {
  const action = onAction({
    event, dungeon
  })

  if (typeof action === 'function') {
    action()
    calculateFov(dungeon)
    director.engine.unlock()
  }
}

export const dungeonScene = Scene({
  init,
  onEnter,
  update,
  draw,
  handleInput
})
