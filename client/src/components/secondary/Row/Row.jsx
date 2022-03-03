import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./row.css"

// props is an array of strings. Each string is a genre.
function Row(props) {

  const [movies, setMovies] = useState([])

  // We need to get the movies from the external API.
  const genre = props.genre[0]
  const BASE_URL = 'https://vadith-moviesapp-backend.herokuapp.com'

  useEffect(() => {
    async function fetchData() {
      const apiMovies = await axios.get(`${BASE_URL}/search?genre=${genre}&year=2021-2022`)
      return apiMovies.data.data
    }
    fetchData().then(movies => {
      setMovies(movies)
    })
    // eslint-disable-next-line
  }, [])

  return movies.length > 0 ? (
    <div className="row">
      <h2>{props.genre}</h2>
      <div className="row__poster">
        {
          movies.map
            (movie => {
              return (
                <div className="" key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img
                      className="card-img-top"
                      src={movie.large_cover_image}
                      alt={movie.title}
                    />
                  </Link>
                </div>
              )
            })}
      </div>
    </div>
  ) : <div>Loading...</div>
}

export default Row; 