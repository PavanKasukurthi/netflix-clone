import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import { auth } from './firebase'

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth)
      } else {
        //logged out
      }
    })

    return unsubscribe
  }, [])

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
