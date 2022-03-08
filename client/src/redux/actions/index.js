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

// Get movies by name (search term from nav component)
export function getNameMovies(name) { //por busqueda -> query

  return async function (dispatch) {
    let json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search?title=${name}`);
    return dispatch({ type: 'GET_NAME_MOVIES', payload: json.data.data, name })
  }

};

export function filterByRating(order, name, year, genre) {

  return async function (dispatch) {
    let json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search?title=${name}&genre=${genre}&year=${year}&order_by=rating&sort=${order}`);
    return dispatch({
      type: "FILTER_BY_RATING",
      payload: json.data.data
    })

  }
}

export function filterByYear(order, name, year, genre) {
  return async function (dispatch) {
    let json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search?title=${name}&genre=${genre}&year=${year}&order_by=rating&sort=${order}`);
    return dispatch({
      type: "FILTER_BY_RATING",
      payload: json.data.data
    })

  }
}

export function filterByGenre(order, name, year, genre) {

  return async function (dispatch) {
    let json = await axios.get(`https://vadith-moviesapp-backend.herokuapp.com/search?title=${name}&genre=${genre}&year=${year}&order_by=rating&sort=${order}`);
    return dispatch({
      type: "FILTER_BY_GENRE",
      payload: json.data.data
    })

  }
}

export function postUser(payload) {

  return async function () {
    const data = await axios.post("http://localhost:3001/user", payload);
    return ({ type: 'POST_USER', data })
  }

}

export function getClean() {

  return {
    type: 'GET_CLEAN'
  }

}