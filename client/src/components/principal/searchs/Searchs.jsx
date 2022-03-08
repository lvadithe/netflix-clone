// import { filterByGenre, filterByRating, filterByYear, getNameMovies } from '../../../redux/actions';

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PaginateF from '../../functional/paginateF/PaginateF'    // Lógica para el paginado
import SearchD from '../search/SearchD'                         // Card con una sola película
import axios from 'axios'

import "./searchs.css";

// Queremos deshacerno de las llamadas a redux, y reemplazarlas
//      por llamadas directas a la api usando hooks y estado local.
// Necesitamos tener un estado local que regitre las opciones de filtrado del usuario
//      y que se actualice cuando cambie la selección del formulario.


function Searchs() {

    const searchTerm = useSelector(state => state.searchTerm)

    const [options, setOptions] = useState({
        order: "",
        year: "",
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
        const fetchData = async () => {

            const result = await axios(`${API_URL}title=${searchTerm}&order_by=rating&sort=${options.order}&year=${options.year}&genre=${options.genre}`)
            setMovies(result.data.data)

        }
        fetchData()
        // eslint-disable-next-line
    }, [searchTerm, options])

    console.log(movies)
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
            <div className="orders">
                {/* className 'order_r' */}
                <select onChange={(e) => handleInputChange(e)} name="order" className="order_r" defaultValue="default">
                    <option value="default" disabled >Rating</option>
                    <option value="asc" >asc</option>
                    <option value="desc" >desc</option>
                </select>
                <select onChange={(e) => handleInputChange(e)} name="year" className="order_r" defaultValue="default">
                    <option value="default" disabled >Years</option>
                    <option value="2022" >2022</option>
                    <option value="2021" >2021</option>
                    <option value="2020" >2020</option>
                    <option value="2019" >2019</option>
                    <option value="2015-2018" >2015-2018</option>
                    <option value="2010-2014" >2010-2014</option>
                    <option value="2000-2009" >2000-2009</option>
                    <option value="1990-1999" >1990-1999</option>
                    <option value="1980-1989" >1980-1989</option>
                    <option value="1970-1979" >1970-1979</option>
                    <option value="1900-1969" >1900-1969</option>
                </select>
                <select onChange={(e) => handleInputChange(e)} name="genre" className="order_r" defaultValue="default">
                    <option value="default" disabled >Genre</option>
                    <option value="Action" >Action</option>
                    <option value="Adventure" >Adventure</option>
                    <option value="Animation" >Animation</option>
                    <option value="Biography" >Biography</option>
                    <option value="Comedy" >Comedy</option>
                    <option value="Crime" >Crime</option>
                    <option value="Documentary" >Documentary</option>
                    <option value="Drama" >Drama</option>
                    <option value="Family" >Family</option>
                    <option value="Fantasy" >Fantasy</option>
                    <option value="Film Noir" >Film Noir</option>
                    <option value="History" >History</option>
                    <option value="Horror" >Horror</option>
                    <option value="Music" >Music</option>
                    <option value="Musical" >Musical</option>
                    <option value="Mystery" >Mystery</option>
                    <option value="Romance" >Romance</option>
                    <option value="Sci-Fi" >Sci-Fi</option>
                    <option value="Short Film" >Short Film</option>
                    <option value="Sport" >Sport</option>
                    <option value="Superhero" >Superhero</option>
                    <option value="Thriller" >Thriller</option>
                    <option value="War" >War</option>
                    <option value="Western" >Western</option>
                </select>
            </div>
            <div className="content">
                {
                    movies.length > 0 ?
                        currentMovies.map(el => {
                            return (
                                <SearchD title={el.title} img={el.large_cover_image} id={el.id} genres={el.genres} />
                            )
                        }) :
                        <h1>Loading....</h1>
                }
                <div className="">
                    <PaginateF
                        moviesPerPage={moviesPerPage}
                        movies={movies.length}
                        paginado={paginado}
                        currentPage={currentMovies}
                    />
                </div>
            </div>
        </div>
    )
}

export default Searchs