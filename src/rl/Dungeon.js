import { RNG } from 'rot-js'

import { director } from './director'
import { getFov } from './fov'
import { Level } from './Level'
import { vector } from './math'
import { wall } from './tiles'

export function Dungeon(props) {
  let levels = null
  let memory = null
  let runningLevel = null

  function init() {
    levels = []
    memory = []
    runningLevel = 0

    const level = Level(/* 0, TODO: this.area */)
    levels[0] = level
    memory[0] = {}
  }

  function getLevelSize() {
    return levels[runningLevel].levelSize
  }

  function getRooms() {
    return levels[runningLevel].rooms
  }

  function getTiles() {
    return levels[runningLevel].tiles
  }

  function getEnemies() {
    return levels[runningLevel].enemies
  }

  function getRandomPoint() {
    const rooms = getRooms()

    const index = Math.floor(RNG.getUniform() * rooms.length)
    const [x, y] = rooms[index].getCenter()

    return vector(x, y)
  }

  function getActorAt(pos) {
    return (
      getTiles()[pos]
      || wall
    )
  }

  function draw(display, viewport) {
    const tiles = getTiles()
    const enemies = getEnemies()

    const fov = getFov()

    Object.keys(fov).forEach((key) => {
      // mark as explored
      memory[runningLevel][key] = true
    })

    ;[tiles, enemies].forEach((actors) => {
      Object.keys(actors).forEach((key) => {
        if (
          true
          // Object.prototype.hasOwnProperty.call(memory[runningLevel], key)
        ) {
          actors[key].draw(
            display,
            viewport,
            Object.prototype.hasOwnProperty.call(fov, key)
          )
        }
      })
    })
  }

  function schedulerAddEnemies() {
    const enemies = getEnemies()

    Object.values(enemies).forEach((enemy) => (
      director.scheduler.add(enemy, true)
    ))
  }

  return {
    ...props,
    init,
    getLevelSize,
    getRooms,
    getRandomPoint,
    getActorAt,
    draw,
    schedulerAddEnemies
  }
}
