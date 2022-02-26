const initialState = {
    movies: [],
    allmovies: [],
    genres: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                allmovies: action.payload
            }

        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }

        case 'FILTER_BY_GENRES':
            // genres is an array of strings.
            // we need to filter the movies array by the genres array.
            const someGenres = action.payload   // ['Action', 'Comedy']
            // we need to create a new object that will hold the filtered movies.
            const filteredMoviesByGenre = {}

            // we need to loop through the genres array.
            // for each genre in the array, we need to populate the filteredMoviesByGenre object.
            // for example, if the genre is 'Action', we need to populate the filteredMoviesByGenre object with the movies that have the genre 'Action'.
            for (let i = 0; i < someGenres.length; i++) {
                // we need to get the genre from the array.
                const genre = someGenres[i]
                // we need to get the movies that have the genre.
                const moviesWithGenre = state.allmovies.filter(movie => movie.genres.includes(genre))
                // we need to populate the filteredMoviesByGenre object with the movies that have the genre.
                filteredMoviesByGenre[genre] = moviesWithGenre
            }

            return {
                ...state,
                filteredMoviesByGenre: filteredMoviesByGenre
            }
        /*
                case 'FILTER_BY_NAME':
                    let orderName = action.payload === "asc" ?
                        state.recipes.sort(function (a, b) {     //sort-> compara y ordena izq o der d
                            if (a.name > b.name) return 1
                            if (b.name > a.name) return -1
                            return 0   //si son iguales
                        }) :
                        state.recipes.sort(function (a, b) {
                            if (a.name > b.name) return -1
                            if (b.name > a.name) return 1
                            return 0
                        })
                    return {
                        ...state,
                        recipes: orderName
                    }
        
        
        
                case 'FILTER_BY_SCORE':
                    const recipesByScore = action.payload === 'asc' ?
                        state.recipes.sort((a, b) => {
                            if (a.healthScore > b.healthScore) return 1;
                            if (b.healthScore > a.healthScore) return -1;
                            return 0;
                        }) :
                        state.recipes.sort((a, b) => {
                            if (a.healthScore > b.healthScore) return -1;
                            if (b.healthScore > a.healthScore) return 1;
                            return 0;
                        });
                    return {
                        ...state,
                        recipes: recipesByScore
                    }
        
                case 'GET_DETAIL':
                    return {
                        ...state,
                        detail: action.payload
                    }
        
                case 'GET_CLEAN':
                    return {
                        ...state,
                        datail: []
                    } */

        default:
            return state
    }

}



export default rootReducer; 