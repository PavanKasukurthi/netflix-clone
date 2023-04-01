import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import axios from '../axios/axios'
import requests from '../axios/Requests'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }

    fetchData()
  }, [])

  console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }
  return (
    <Wrapper>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //   backgroundPosition: 'center center',
        }}
      >
        {/* <img src={home} alt="" /> */}
        <div className="banner-contents">
          <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">
            {truncate(`${movie?.overview}`, 250)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .banner {
    position: relative;
    height: 467px;
    color: white;
    object-fit: contain;
  }

  .banner-contents {
    margin-left: 3rem;
    padding-top: 10rem;
    height: 190px;
  }

  .banner-title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner-description{
    width: 45rem
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px
  }

   .banner--fadeBottom {
        height: 7.4rem;
        background-image:linear-gradient(
            180deg,
            transparent,
            rgba(37,37,37,0.61),
            #111
        )
  }

  .banner-button{
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51,51,51,0.5)
  }

  
.banner-button:hover {
  background-color: white;
  color: black;
  transition: 0.5s
}
  
`

export default Banner
