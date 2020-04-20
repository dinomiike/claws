import React from 'react'
import styled from 'styled-components'

const PlayerTitle = styled.h1`
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
`

function AudioPlayer() {
  return (
    <div className="AudioPlayer">
      <PlayerTitle>Audio Player</PlayerTitle>
    </div>
  )
}

export default AudioPlayer
