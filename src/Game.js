import React, {
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'

import { director } from './rl/director'
import { dungeonScene as scene } from './rl/dungeonScene'

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 816px;
  padding: 24px;
`

function Game() {
  const gameEl = useRef()

  useEffect(() => {
    director.init()
    director.runScene(scene)

    gameEl.current.appendChild(
      director.getContainer()
    )
  })

  return (
    <Wrapper>
      <div ref={gameEl} />
    </Wrapper>
  )
}

export default Game
