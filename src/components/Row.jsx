import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../axios/axios'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  //   console.log(movies)

  return (
    <Wrapper>
      <div className="row">
        <h2>{title}</h2>

        <div className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              //   onClick={() => handleClick(movie)}
              className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .row {
    color: white;
    margin-left: 20px;
  }

  .row-posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 20px;
  }

  .row-posters::-webkit-scrollbar {
    display: none;
  }

  .row-poster {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    margin-right: 10px;
    transition: transform 250ms;
  }

  .row-poster:hover {
    transition-timing-function: ease-in;
    cursor: pointer;
    transform: scale(1.08);
  }

  .row-posterLarge {
    max-height: 250px;
  }

  .row-posterLarge:hover {
    transition-timing-function: ease-in;
    transform: scale(1.09);
  }
`

export default Row
