import { RNG } from 'rot-js'

import { Level } from './Level'
import { vector } from './math'
import { wall } from './tiles'

let levels = null
let runningLevel = null

function init() {
  levels = []
  runningLevel = 0

  const level = Level(/* 0, TODO: this.area */)
  levels[0] = level
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

  ;[tiles].forEach((actors) => {
    Object.keys(actors).forEach((key) => {
      actors[key].draw(
        display, viewport
      )
    })
  })
}

const dungeonProto = {
  init,
  getLevelSize,
  getRooms,
  getRandomPoint,
  getActorAt,
  draw
}

export function Dungeon(props) {
  return {
    ...dungeonProto,
    ...props
  }
}
