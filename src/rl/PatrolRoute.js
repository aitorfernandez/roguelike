import { randFloat } from './rand'

export function PatrolRoute() {
  const points = []

  function addPoint(point) {
    points.push(point)
  }

  function getRandomPoint() {
    const index = Math.floor(randFloat() * points.length)
    return points[index]
  }

  return {
    addPoint,
    getRandomPoint
  }
}
