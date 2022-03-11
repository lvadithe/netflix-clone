const initialState = {
    movies: [],
    allmovies: [],
    detail: [],
    searchTerm: '',
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                allmovies: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'PICK_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }

}


export default rootReducer
