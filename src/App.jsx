import React from 'react'
import Home from './components/Home'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <div className="app">
        <Home />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .app {
    background-color: #111;
  }

  .app::-webkit-scrollbar {
    display: none;
  }
`

export default App
