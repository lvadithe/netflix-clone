/* const data = require('../apiInfo/allDbData') */
const { Movie, User } = require('../db');

const allDbData = async () => {

    return await Movie.findAll({
        attributes: ['id', 'imdb_code', 'title', 'title_long', 'year', 'rating', 'runtime', 'genres', 'synopsis', 'description_full', 'yt_trailer_code', 'language', 'background_image', 'background_image_original', 'small_cover_image', 'medium_cover_image', 'large_cover_image'],
    })
        .then(movies => {
            console.log(movies.toJSON())
        })
        .catch(err => {
            console.log(err)
        })
};

const get = async (req, res) => {

    try {

        const { name } = req.query;
        const recipesAll = await allDbData();

        if (name) {

            let recipesName = await recipesAll.filter(
                e => e.name.toLowerCase().includes(name.toLowerCase()));

            recipesName.length ?
                res.status(200).send(recipesName) :
                res.status(400).send('There is no recipe you are looking for.');

        } else {
            res.status(200).send(recipesAll)
        }

    } catch {
        return res.status(400).send('invalid input');
    }

};

const movieId = async (req, res) => {

    try {

        const { id } = req.params;
        const moviesID = await data.allData()

        if (id) {
            const moviesId = await moviesID.filter(e => e.id == id)
            moviesId.length ?
                res.status(200).send(moviesId) :
                res.status(404).send('No Recipe Found.')
        }

    } catch {
        return res.status(400).send('Invalid input');
    }

};

module.exports = {
    get,
    movieId
}