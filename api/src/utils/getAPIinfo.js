const { Movie } = require('../db.js');

const axios = require('axios');
const progressBar = require('progress-barjs');


// Necesitamos:
// 1. Obtener número total de películas. Lo vamos a obtener de la primera página, y sirve para mostrar una barra de progreso.
// 2. Descargar una por una todas las páginas (traen 50 cada una).
// 3. Guardar en la base de datos.


const downloadAndSaveMovies = async () => {

    const API = {
        BASE_URL: 'https://yts.am/api/v2/list_movies.json',
        PARAMS: { limit: 50, page: 1, order_by: process.argv[2] || "desc" },
    }
    const totalMoviesLimit = 500;
    const totalPagesLimit = totalMoviesLimit / API.PARAMS.limit;

    // Averiguamos cuántas películas hay disponibles para descargar
    const { data } = await axios.get(`${API.BASE_URL}?limit=1`);
    const totalMoviesInAPI = data.data.movie_count;

    // Limite impuesto manualmente, o número total de películas, lo que sea menor:
    const totalPagesInAPI = Math.ceil(totalMoviesInAPI / API.PARAMS.limit)
    const totalPages = totalPagesInAPI > totalPagesLimit ? totalPagesLimit : totalPagesInAPI;

    // Inicializamos la barra de progreso
    const totalMovies =
        totalMoviesLimit < totalMoviesInAPI
            ? totalPages * API.PARAMS.limit
            : totalMoviesInAPI;
    const progressBarOptions = {
        info: 'Downloading',
        total: totalMovies,
        show: { overwrite: true }
    }
    const bar = progressBar(progressBarOptions);

    // Función auxiliar para guardar las películas en la base de datos de a 50 en 50
    const saveToDB = async (movies) => {

        movies.forEach(movie => {
            bar.tick(movie.title_long);
            console.log('')
        });

        const savedMovies = await Movie.bulkCreate(
            movies,
            {
                updateOnDuplicate: ['id', 'imdb_code', 'title', 'title_long', 'year', 'rating', 'runtime', 'genres', 'synopsis', 'description_full', 'yt_trailer_code', 'language', 'background_image', 'background_image_original', 'small_cover_image', 'medium_cover_image', 'large_cover_image']
            }
        );

    }

    // Descargamos las películas, 50 a la vez
    for (let page = 1; page <= totalPages; page++) {

        API.PARAMS.page = page;
        try {
            const { data } = await axios.get(API.BASE_URL, { params: API.PARAMS });
            const sanitizedMovies = data.data.movies.map(movie => {
                return {
                    id: movie.id,
                    imdb_code: movie.imdb_code,
                    title: movie.title,
                    title_long: movie.title_long,
                    year: movie.year,
                    rating: movie.rating,
                    runtime: movie.runtime,
                    genres: movie.genres, // Array
                    synopsis: movie.synopsis,
                    description_full: movie.description_full,
                    yt_trailer_code: movie.yt_trailer_code,
                    language: movie.language,
                    background_image: movie.background_image,
                    background_image_original: movie.background_image_original,
                    small_cover_image: movie.small_cover_image,
                    medium_cover_image: movie.medium_cover_image,
                    large_cover_image: movie.large_cover_image,
                }
            });

            saveToDB(sanitizedMovies);
        } catch (error) { console.log(`Error downloading page ${page}`); }

    }

    console.log(`\n${totalMovies} to the local database\n`);

    return

}

console.log('Getting total movies...');

module.exports = {
    downloadAndSaveMovies,
}