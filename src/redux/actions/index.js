import axios from 'axios'


export function getMovies() {
  return async function (dispatch) {
    let json = await axios.get("https://vadith-moviesapp-backend.herokuapp.com/search")
    return dispatch({
      type: 'GET_MOVIES',
      payload: json.data.data
    })
  }
};

export function getMoviesDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search/${id}`)
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data.data
    })
  }
}

export function pickSearchTerm(term) {
  return {
    type: 'PICK_SEARCH_TERM',
    payload: term
  }
}
