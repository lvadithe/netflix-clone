import axios from 'axios';

export function getMovies() {

  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/movies");
    return dispatch({
      type: 'GET_MOVIES',
      payload: json.data

    })
    
  }

};

export function getGenres() {

  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: 'GET_GENRES',
      payload: json.data,
    })
  }

};

export function filterMoviesByGeners(genres) {

  return  {
    type: 'FILTER_BY_GENRES',
    payload: genres
  }

};