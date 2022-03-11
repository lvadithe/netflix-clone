import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import MovieCard from '../MovieCard/MovieCard'
import PaginateF from '../../functional/paginateF/PaginateF'    // Lógica para el paginado
import SearchFilters from '../../secondary/SearchFilters/SearchFilters'
import axios from 'axios'

import "./Search.css"


function Search() {

    const searchTerm = useSelector(state => state.searchTerm)

    const [options, setOptions] = useState({
        order: "",
        year1: "",
        year2: "",
        genre: ""
    })
    const [movies, setMovies] = useState([])


    //  Manejo del estado del formulario
    const handleInputChange = (e) => {
        e.preventDefault()
        setOptions({
            ...options,
            [e.target.name]: e.target.value
        })
    }

    // Búsqueda propiamente dicha:
    const API_URL = "https://vadith-moviesapp-backend.herokuapp.com/search?"

    useEffect(() => {
        let year1 = options.year1 || 0
        let year2 = options.year2 || new Date().getFullYear()
        // We pick the smaller one and we use it as the first year
        let yearString = Number(year1) < Number(year2) ? `${year1}-${year2}` : `${year2}-${year1}`
        const fetchData = async () => {
            const result = await axios(API_URL + "title=" + searchTerm + "&genre="
                + options.genre + "&year=" + yearString + "&order_by=rating&sort=" + options.order
            )
            setMovies(result.data.data)
        }
        fetchData()
        // eslint-disable-next-line
    }, [searchTerm, options])

    // ############################################################
    //                   RELATIVO AL PAGINADO
    const [moviesPerPage] = useState(24)
    const [currentPage, setCurrentPage] = useState(1)
    const lastMovie = currentPage * moviesPerPage
    const firstMovie = lastMovie - moviesPerPage
    const currentMovies = movies.slice(firstMovie, lastMovie)

    const paginado = (pageNumber) => setCurrentPage(pageNumber)
    // ############################################################

    return (
        <div className="container">
            <SearchFilters handleInputChange={handleInputChange} />
            <div className="content">
                {
                    movies.length > 0 ?
                        currentMovies.map((el, index) => {
                            return (
                                <MovieCard
                                    id={el.id}
                                    key={el.id}
                                    title={el.title}
                                    genres={el.genres}
                                    img={el.medium_cover_image}
                                />
                            )
                        }) : <h1>Loading....</h1>
                }
            </div>
            <div className="">
                <PaginateF
                    paginado={paginado}
                    movies={movies.length}
                    currentPage={currentMovies}
                    moviesPerPage={moviesPerPage}
                />
            </div>
        </div>
    )
}

export default Search
