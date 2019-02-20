import { Tile } from './Tile'

export const wall = Tile({
  ch: '#',
  fg: '#808080',
  name: 'solid wall',

  opaque: true,

  isWalkable: false
})

export const stoneFloor = Tile({
  ch: '.',
  fg: '#d9d9d9',
  name: 'stone floor'
})
