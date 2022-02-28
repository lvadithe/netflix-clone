const initialState = {
    movies: [],
    allmovies: [],
    detail: [],
    searchR: []
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
                searchR: action.payload
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