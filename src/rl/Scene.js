const sceneProto = {
  init() {
    // TBD
  },

  onEnter() {
    // TBD
  },

  onExit() {
    // TBD
  },

  handleInput() {
    // TBD
  },

  update() {
    // TBD
  },

  draw() {
    throw Error('draw() function need to be overridden.')
  }
}

export function Scene(props) {
  return {
    ...sceneProto,
    ...props
  }
}
