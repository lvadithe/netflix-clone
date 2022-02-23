const fs = require('fs')
const axios = require('axios')
const progressBar = require('progress-barjs')

const API = {
    PARAMS: { limit: 50, page: 1, order_by: process.argv[2] || "desc" },
    MOVIE_LIST: 'list_movies.json',
    BASE_URL: 'https://yts.am/api/v2/',
}

const getAllMovies = (async () => {
    // Download the first page to get some statstics
    const { data: response } = await axios.get(`${API.BASE_URL}${API.MOVIE_LIST}`, { params: API.PARAMS })
    const totalMoviesCount = response.data.movie_count
    const numberOfPages = Math.ceil(totalMoviesCount / API.PARAMS.limit) // 39440 / 50 = 890

    // Initialize the progress bar
    let options = { info: 'Downloading', total: totalMoviesCount, show: { overwrite: true } }
    let bar = progressBar(options)

    // For each page, get the movies and download the cover images and the torrent files asynchronously and in parallel using axios and Promise.all
    for (let page = 1; page <= numberOfPages; page++) {
        API.PARAMS.page = page
        const { data: response } = await axios.get(`${API.BASE_URL}${API.MOVIE_LIST}`, { params: API.PARAMS })
        const movies = response.data.movies

        // Array of promises. We will need this for the actual download later.
        const requests = movies.map(movie => {  // Esto sucede 50 veces

            // Santize the movie titles and determine the file name based on the movie "long_title"
            const movieTitle = movie.title.replace(/\//g, ' ').trim() // Needed for the movie folder
            const fileName = movie.title_long.replace(/\//g, ' ').trim() // Needed for the cover and torrent files

            // Create the directory for the movie if it doesn't exist
            if (!fs.existsSync(`./movies`)) { fs.mkdirSync(`./movies`) }
            if (!fs.existsSync(`./movies/${movie.year}`)) { fs.mkdirSync(`./movies/${movie.year}`) }
            if (!fs.existsSync(`./movies/${movie.year}/${movieTitle}`)) { fs.mkdirSync(`./movies/${movie.year}/${movieTitle}`) }
            const movieDir = `./movies/${movie.year}/${movieTitle}`

            // Pick a cover image, prefering the bigger ones
            const haveLarge = movie.large_cover_image?.length > 0
            const haveMedium = movie.medium_cover_image?.length > 0
            const haveSmall = movie.small_cover_image?.length > 0
            const placeHolder = 'https://uniq-gift.ro/ug/wp-content/uploads/woocommerce-placeholder-500x750.png'
            const coverImage = haveLarge ? movie.large_cover_image : (haveMedium ? movie.medium_cover_image : (haveSmall ? movie.small_cover_image : placeHolder))

            // Pick a torrent file, prefering the ones with the best quality
            const have1080p = movie.torrents?.find(torrent => torrent.quality === '1080p')
            const have720p = movie.torrents?.find(torrent => torrent.quality === '720p')
            const torrent = have1080p || have720p || movie.torrents?.at(0)
            const torrentFile = torrent?.url
            const torrentQuality = torrent?.quality
            const torrentName = fileName + ' ' + torrentQuality + '.torrent'

            const haveCover = fs.existsSync(`${movieDir}/${fileName}.jpg`)
            const haveTorrent = fs.existsSync(`${movieDir}/${torrentName}`)

            if (!haveCover && !haveTorrent) try {
                return axios.all([
                    axios.get(coverImage, { responseType: 'arraybuffer' }),
                    axios.get(torrentFile, { responseType: 'arraybuffer' })
                ]).then(axios.spread((coverImageResponse, torrentFileResponse) => {
                    // Write the cover image and the torrent file to the disk only if they don't already exist
                    fs.writeFileSync(`${movieDir}/${fileName}.jpg`, coverImageResponse.data)
                    fs.writeFileSync(`${movieDir}/${torrentName}`, torrentFileResponse.data)
                    bar.tick(``)
                }))
            } catch (error) { null }
            else bar.tick(``)
        })
        
        try { await Promise.all(requests) } catch (error) { null }
    }

})()
