// import { filterByGenre, filterByRating, filterByYear, getNameMovies } from '../../../redux/actions';

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PaginateF from '../../functional/paginateF/PaginateF'    // Lógica para el paginado
import MovieCard from '../MovieCard/MovieCard'
import SearchFilters from '../../secondary/SearchFilters/SearchFilters'
import axios from 'axios'

import "./Searchs.css";

// Queremos deshacerno de las llamadas a redux, y reemplazarlas
//      por llamadas directas a la api usando hooks y estado local.
// Necesitamos tener un estado local que regitre las opciones de filtrado del usuario
//      y que se actualice cuando cambie la selección del formulario.


function Searchs() {

    const searchTerm = useSelector(state => state.searchTerm)

    const [options, setOptions] = useState({
        order: "",
        year1: "",
        year2: "",
        genre: ""
    })
    const [movies, setMovies] = useState([])


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
    // Término de búsqueda desde el componente nav, donde está el input del usuario
    console.log(searchTerm)
    // Envío de la búsqueda al backend
    useEffect(() => {
        let year1 = options.year1 || 0
        let year2 = options.year2 || new Date().getFullYear()
        // We pick the smaller one and we use it as the first year
        let yearString = Number(year1) < Number(year2) ? `${year1}-${year2}` : `${year2}-${year1}`
        const fetchData = async () => {
            const result = await axios(`${API_URL}title=${searchTerm}&order_by=rating&sort=${options.order}&year=${yearString}&genre=${options.genre}`)
            setMovies(result.data.data)
        }
        fetchData()
        // eslint-disable-next-line
    }, [searchTerm, options])

    // ########################################################
    // RELATIVO AL PAGINADO
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(24)
    const lastMovie = currentPage * moviesPerPage
    const firstMovie = lastMovie - moviesPerPage
    const currentMovies = movies.slice(firstMovie, lastMovie)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }   // Importante y no se toca
    // ########################################################

    // Para refactorear a un componente presentacional:
    //     - Necesitamos enviarle como props lo siguiente
    //         - onChange: para el input

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
                                    key={index}
                                    title={el.title}
                                    genres={el.genres}
                                    img={el.large_cover_image}
                                />
                            )
                        }) : <h1>Loading....</h1>
                }
            </div>
            <div className="">
                <PaginateF
                    moviesPerPage={moviesPerPage}
                    movies={movies.length}
                    paginado={paginado}
                    currentPage={currentMovies}
                />
            </div>
        </div>
    )
}

export default Searchs
