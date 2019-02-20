import {
  Display,
  Engine,
  RNG,
  Scheduler
} from 'rot-js'

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

const scheduler = new Scheduler.Speed()
const engine = new Engine(scheduler)

let display = null
let runningScene = null
let sceneStack = null

function init() {
  if (display) {
    throw Error('Display already initialized.')
  }

  RNG.setSeed(Date.now())

  display = new Display(options)

  const handleInput = (event) => {
    display.clear()

    if (runningScene) {
      runningScene.handleInput(event)
      runningScene.update()
      runningScene.draw(display)
    }
  }

  window.addEventListener('keydown', handleInput)
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
  winSize,

  scheduler,
  engine,

  init,
  getContainer,
  runScene
}
