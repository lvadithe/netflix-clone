import axios from 'axios'

const BASE_URL = 'https://vadith-moviesapp-backend.herokuapp.com/'
const authUrls = {
  login: `${BASE_URL}auth/login`,
  logout: `${BASE_URL}auth/logout`,
  register: `${BASE_URL}auth/signup`,
  userInfo: `${BASE_URL}auth/user_data`,
}


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

// #############################################################################
//                              AUTHENTICATION

export function login(user) {
  return async function (dispatch) {
    try {
      const json = await axios.post(authUrls.login, user)
      return dispatch({
        type: 'LOGIN',
        payload: json.data
      })
    }
    catch (err) {
      return dispatch({
        type: 'LOGIN_ERROR',
        payload: {error: err.response.data}
      })
    }
  }
}

export function signup(user) {
  return async function (dispatch) {
    try {
      const json = await axios.post(authUrls.register, user)
      return dispatch({
        type: 'REGISTER',
        payload: json.data
      })
    }
    catch (err) {
      return dispatch({
        type: 'REGISTER_ERROR',
        payload: {error: err.response.data}
      })
    }
  }
}