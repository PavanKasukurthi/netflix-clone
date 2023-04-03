import React from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const user = null
  return (
    <Wrapper>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          )}
        </Router>
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
