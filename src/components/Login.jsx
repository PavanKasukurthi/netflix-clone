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
        <div className="loginScreen-background">
          <img className="loginScreen-logo" src={logo} alt="Login logo" />

          <button
            onClick={() => setSignIn(true)}
            className="loginScreen-button"
          >
            Sign In
          </button>
          <div className="loginScreen-gradient" />
          <div className="loginScreen-body">
            {signIn ? (
              <SignIn />
            ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>

                <div className="loginScreen-input">
                  <form action="">
                    <input type="email" placeholder="Email Address" />
                    <button
                      onClick={() => setSignIn(true)}
                      className="loginScreen-getStarted"
                    >
                      GET STARTED
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .loginScreen {
    position: relative;
    height: 100%;
    background: url('https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg')
      center no-repeat;
    background-size: cover;
  }

  .loginScreen-body > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  .loginScreen-body > h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .loginScreen-body > h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  .loginScreen-body {
    position: absolute;
    top: 30%;
    left: 10%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1;
    padding: 20px;
    color: white;
  }

  .loginScreen-gradient {
    width: 100%;
    z-index: 1;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  .loginScreen-logo {
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }

  .loginScreen-button {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    object-fit: contain;
    background-color: #e50914;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .loginScreen-input > form > input {
    padding: 10px;
    outline-width: 0;
    height: 30px;
    width: 30%;
    border: none;
    max-width: 600px;
  }

  .loginScreen-input {
    margin: 20px;
  }

  .loginScreen-getStarted {
    padding: 16px 20px;
    font-size: 1rem;
    color: white;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
`

export default Login
