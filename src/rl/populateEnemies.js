import { RNG } from 'rot-js'

import { PatrolRoute } from './PatrolRoute'
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

    const patrol = PatrolRoute()

    for (let i = 0; i < (enemy.patrolPoints || 1); i += 1) {
      // TODO: Check if position is occupied by closed doors, for the Hero for other Enemies or a special room

      const { pos: randomPos } = tiles[keys[keys.length * Math.random() << 0]]
      patrol.addPoint(randomPos)
    }

    // Initial position
    const pos = patrol.getRandomPoint()

    enemies[pos] = {
      ...enemy,
      patrol,
      pos
    }
  }

  return enemies
}
