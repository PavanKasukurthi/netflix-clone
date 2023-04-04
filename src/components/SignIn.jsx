import React, { useRef } from 'react'
import styled from 'styled-components'
import { auth } from '../firebase.jsx'

const SignIn = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <Wrapper>
      <div className="signupScreen">
        <form action="">
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit">Sign In</button>

          <h4>
            <span className="gray" onClick={signIn}>
              New to Netflix?{' '}
            </span>
            <span className="link" onClick={register}>
              Sign Up now.
            </span>
          </h4>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .signupScreen {
    max-width: 300px;
    padding: 70px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0, 0, 0, 0.85);
  }

  h1 {
    text-align: left;
    margin-bottom: 1.5rem;
  }

  h4 {
    text-align: left;
    margin-top: 20px;
  }

  .gray {
    color: gray;
  }

  .link:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .signupScreen > form {
    display: grid;
    flex-direction: column;
  }

  .signupScreen > form > input {
    outline-width: 0;
    height: 40px;
    margin-bottom: 14px;
    border-radius: 0.25rem;
    border: none;
    padding: 5px 15px;
  }

  button {
    background-color: #e50914;
    padding: 16px 20px;
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`

export default SignIn
