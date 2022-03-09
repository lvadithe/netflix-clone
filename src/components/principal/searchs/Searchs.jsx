import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import MovieCard from '../MovieCard/MovieCard'
import PaginateF from '../../functional/paginateF/PaginateF'    // Lógica para el paginado
import SearchFilters from '../../secondary/SearchFilters/SearchFilters'

import axios from 'axios'

import "./searchs.css";


function Searchs() {

    const searchTerm = useSelector(state => state.searchTerm)   // Viene de nav

    const [movies, setMovies] = useState([])
    const [options, setOptions] = useState({
        order: "",
        year1: "",
        year2: "",
        genre: ""
    })

    //  Manejo de la búsqueda
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
            const result = await axios(API_URL + 'title=' + searchTerm +
                '&order_by=rating&sort=' + options.order + '&year=' + yearString + '&genre=' + options.genre)
            setMovies(result.data.data)
        }
        fetchData()
        // eslint-disable-next-line
    }, [searchTerm, options])

    // ########################################################
    // RELATIVO AL PAGINADO
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(6)
    const lastMovie = currentPage * moviesPerPage
    const firstMovie = lastMovie - moviesPerPage
    const currentMovies = movies.slice(firstMovie, lastMovie)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }   // Importante y no se toca
    // ########################################################


    return (
        <div className="container">
            <SearchFilters handleInputChange={handleInputChange} />
            <div className="content">
                {
                    movies.length > 0 ?
                        currentMovies.map(el => {
                            return (
                                <MovieCard
                                    id={el.id}
                                    title={el.title}
                                    genres={el.genres}
                                    img={el.large_cover_image}
                                />
                            )
                        }) : <h1>Loading....</h1>
                }
                <div className="">
                    <PaginateF
                        paginado={paginado}
                        movies={movies.length}
                        currentPage={currentMovies}
                        moviesPerPage={moviesPerPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Searchs
