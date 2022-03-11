import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Row.css"

// props is an array of strings. Each string is a genre.
function Row(props) {

  const [movies, setMovies] = useState([])

  // We need to get the movies from the external API.
  const genre = props.genre[0]
  const BASE_URL = 'https://vadith-moviesapp-backend.herokuapp.com'

  useEffect(() => {
    async function fetchData() {
      const thisYear = new Date().getFullYear()
      const lastYear = thisYear - 1
      const apiMovies = await axios.get(`${BASE_URL}/search?genre=${genre}&year=${lastYear}-${thisYear}&order_by=rating`)
      return apiMovies.data.data
    }
    fetchData().then(movies => {
      setMovies(movies)
    })
    // eslint-disable-next-line
  }, [])

  const description = props.description || props.genre

  return movies.length > 0 ? (
    <div className="row">
      <h2>{description}</h2>
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

export default Row 