const initialState = {
    movies: [],
    allmovies: [],
    detail: [],
    searchR: [],
    user: []
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
        case 'FILTER_BY_RATING':
            let orderName = action.payload === "asc" ?
                state.movies.sort(function (a, b) {     //sort-> compara y ordena izq o der d
                    if (a.rating > b.rating) return 1
                    if (b.rating > a.rating) return -1
                    return 0   //si son iguales
                }) :
                state.movies.sort(function (a, b) {
                    if (a.rating > b.name) return -1
                    if (b.rating > a.rating) return 1
                    return 0
                })
            return {
                ...state,
                recipes: orderName
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