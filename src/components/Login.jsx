import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import background from '../assets/login.jpg'
import SignIn from './SignIn'

const Login = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <Wrapper>
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img className="loginScreen__logo" src={logo} alt="" />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__button"
          >
            Sign In
          </button>
          <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .loginScreen {
    position: relative;
    height: 100%;
    background: url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')
      center no-repeat;
    background-size: cover;
  }

  .loginScreen__logo {
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
  }

  .loginScreen__button {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }

  .loginScreen__gradient {
    width: 100%;
    z-index: 1;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .loginScreen__body {
    position: absolute;
    top: 20%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1;
    color: #fff;
    padding: 20px;
    left: 0;
    right: 0;
  }

  .loginScreen__body > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  .loginScreen__body > h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .loginScreen__body > h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  .loginScreen__input > form > input {
    padding: 10px;
    outline-width: 0;
    height: 30px;
    width: 30%;
    border: none;
    max-width: 600px;
  }

  .loginScreen__getStarted {
    padding: 16px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .loginScreen__input {
    margin: 20px;
  }
`

export default Login
