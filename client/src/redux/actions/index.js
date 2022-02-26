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

export function getMoviesDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/movies/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data
    })
  }
}