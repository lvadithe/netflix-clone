import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./banner.css";


function Banner() {

    const [randomMovie, setRandomMovie] = useState([])

    // We need to get the movies from the external API.
    const BASE_URL = 'https://vadith-moviesapp-backend.herokuapp.com/search?year=2021-2022&order_by=rating&limit=100'

    useEffect(() => {
        async function fetchData() {
            const apiMovies = await axios.get(BASE_URL)
            return apiMovies.data.data
        }
        fetchData().then(movies => {
            setRandomMovie(movies[Math.floor(Math.random() * movies.length)])
        })
        // eslint-disable-next-line
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    const handleClick = (e) => {
        // We need to redirect the user to the youtube page of the trailer video
        window.open(`https://www.youtube.com/watch?v=${randomMovie.yt_trailer_code}`, "_blank")
    }

    return (
        <header className="banner__container" style={{
            backgroundImage: `url(${randomMovie ? randomMovie.large_cover_image : ""})`,
        }}>
            <div className="banner_content">
                <h1 className="banner__title">
                    {randomMovie ? randomMovie.title : ""}
                </h1>
                <div className="banner_buttons">
                    <button className='banner__button' onClick={handleClick}>Trailer</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`${randomMovie ? randomMovie.synopsis : ""}`, 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
