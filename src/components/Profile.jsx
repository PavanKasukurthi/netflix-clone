import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import avatar from '../assets/Netflix-avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

const Profile = () => {
  const user = useSelector(selectUser)
  return (
    <Wrapper>
      <div className="profileScreen">
        <NavBar />
        <div className="body">
          <h1>Edit Profile</h1>
          <div className="info">
            <img src={avatar} alt="avatar" />
            <div className="details">
              <h2>{user.email}</h2>
              <div className="plans">
                <h3>Plans (Current plan: Premium)</h3>
                <button onClick={() => auth.signOut()} className="signOut">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .profileScreen {
    height: 100vh;
    color: white;
  }

  .body {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding-top: 8%;
    max-width: 800px;
  }

  .info {
    display: flex;
  }

  .info > h1 {
    font-size: 30px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }

  h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }

  .signOut {
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #e50914;
    border: none;
    font-weight: 600;
    border-radius: 0.2rem;
    cursor: pointer;
    margin-top: 5%;
    width: 100%;
    cursor: pointer;
  }

  .info > .details {
    color: white;
    margin-left: 25px;
    flex: 1;
  }

  .info > img {
    height: 100px;
  }

  .plans {
    margin-top: 20px;
  }

  .plans > h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`

export default Profile
