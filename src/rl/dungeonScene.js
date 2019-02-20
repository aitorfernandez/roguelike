import { Scene } from './Scene'

function draw(display) {
  display.drawText(1, 1, '%c{CornflowerBlue}dungeonScene!')
}

export const dungeonScene = Scene({
  draw
})
