import { RNG } from 'rot-js'

import { zombie } from './enemies'

export function populateEnemies(
  tiles
) {
  // TODO: Update the average with the level

  const averageEnemies = {
    zombie: 1
  }

  // TODO: Update the featuredEnemies with the level

  const featuredEnemies = {
    zombie
  }

  const enemies = {}
  const keys = Object.keys(tiles)

  for (let i = 0; i < 10; i += 1) {
    const averageEnemy = RNG.getWeightedValue(averageEnemies)
    const enemy = featuredEnemies[averageEnemy]

    const { pos } = tiles[keys[keys.length * Math.random() << 0]]

    enemies[pos] = {
      ...enemy,
      pos
    }
  }

  return enemies
}
