import { mergeWith } from './utils'
import { vector } from './math'

const actorProto = {
  groups: ['actors'],
  name: 'actorProto',

  pos: vector(),

  draw(
    display, viewport = { x: 0, y: 0 }, fov = true
  ) {
    const {
      pos,
      ch,
      fg,
      bg
    } = this

    display.draw(
      pos.x - viewport.x,
      pos.y - viewport.y,
      ch,
      fov ? fg : '#262626',
      bg
    )
  },

  toString() {
    return `${this.name}`
  }
}

// An actor is any object that can be placed into a scene

export function Actor(props = {}) {
  return mergeWith(actorProto, props)
}
