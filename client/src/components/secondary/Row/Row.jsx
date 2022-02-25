import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, filterMoviesByGeners } from "../../../redux/actions"
import "./row.css"
// props is an array of strings. Each string is a genre.
function Row(props) {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.allmovies)
  const [moviesToShow, setMoviesToShow] = useState([])

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  // we need to dipatch filterByGenres with our genres array, which we received by props:
  useEffect(() => {
    dispatch(filterMoviesByGeners(props.genre))
  }, [props.genre])

  // when the reducer filtered the movies array, we use it to populate our local state:
  useEffect(() => {
    setMoviesToShow(movies)
  }, [movies])

  return (
    <div className="row">
      <h2>{props.genre}</h2>
      <div className="row__poster">
        {
          moviesToShow.map
            (movie => {
              return (
                <div className=""key={movie.id}>
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
  )
}

export default Row;