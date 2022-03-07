const initialState = {
    movies: [],
    allmovies: [],
    detail: [],
    searchR: [],
    user: [],
    name: []
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
        case 'GET_NAME_MOVIES':
            return {
                ...state,
                name: action.name,
                searchR: action.payload
            }
        case 'FILTER_BY_RATING':
            return {
                ...state,
                searchR: action.payload
            }
        case 'FILTER_BY_YEAR':
            return {
                ...state,
                searchR: action.payload
            }
        case 'POST_USER':
            return {
                ...state,
                user: []
            }
        case 'GET_CLEAN':
            return {
                ...state,
                searchR: []
            }
        default:
            return state
    }

}



export default rootReducer; 