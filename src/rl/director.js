import { Display } from 'rot-js'

const winSize = {
  width: 32,
  height: 16
}

const options = {
  ...winSize,
  fontFamily: 'Roboto',
  fontSize: 24,
  forceSquareRatio: true
}

let display = null
let runningScene = null
let sceneStack = null

function init() {
  if (display) {
    throw Error('Display already initialized.')
  }

  display = new Display(options)
}

function getContainer() {
  return display.getContainer()
}

function runScene(scene) {
  if (sceneStack && sceneStack.length) {
    sceneStack.forEach((s) => s.onExit())
  }

  sceneStack = []
  sceneStack.push(scene)

  runningScene = scene

  runningScene.init()
  runningScene.onEnter()

  display.clear()

  runningScene.update()
  runningScene.draw(display)
}

export const director = {
  init,
  getContainer,
  runScene
}
