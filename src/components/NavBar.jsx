import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import avatar from '../assets/Netflix-avatar.png'

const NavBar = () => {
  const [show, setShow] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <Wrapper>
      <div className={`nav ${show && 'nav__black'}`}>
        <img className="nav__logo" src={logo} alt="Netflix Logo" />
        <img className="nav__avatar" src={avatar} alt="Netflix Logo" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 30px;
    z-index: 1;
    /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;
  }

  .nav__black {
    background-color: #111;
  }

  .nav__logo {
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
  }

  .nav__avatar {
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
  }
`
export default NavBar
