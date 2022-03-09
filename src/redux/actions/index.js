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

// Nueva action para recibir solamente el término de búsqueda, y luego utilizarlo en el componente SearchS
export function pickSearchTerm(term) {
  return {
    type: 'PICK_SEARCH_TERM',
    payload: term
  }
}
