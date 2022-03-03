import axios from 'axios';

export function getMovies() {

  return async function (dispatch) {
    let json = await axios.get("https://vadith-moviesapp-backend.herokuapp.com/search");
    return dispatch({
      type: 'GET_MOVIES',
      payload: json.data.data

    })

  }

};

export function getMoviesDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/movies/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data
    })
  }
}

export function getNameMovies(name) { //por busqueda -> query

  return async function (dispatch) {
    let json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search?title=${name}`);
    return dispatch({ type: 'GET_NAME_MOVIES', payload: json.data.data })
  }

};

export function getClean() {

  return {
    type: 'GET_CLEAN'
  }

}