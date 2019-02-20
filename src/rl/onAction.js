import { getPositions } from './keyboard'
import { hero } from './hero'
import { move } from './actions'
import { vector } from './math'

export function onAction({
  event, dungeon
}) {
  const pos = getPositions(event)
  if (pos) {
    const actor = dungeon.getActorAt(
      vector(
        hero.pos.x + pos.x,
        hero.pos.y + pos.y
      )
    )

    return move(actor)
  }
}
