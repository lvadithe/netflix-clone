import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByGenre, filterByRating, filterByYear, getNameMovies } from '../../../redux/actions';
import PaginateF from '../../functional/paginateF/PaginateF'
import SearchD from '../search/SearchD'
import "./searchs.css";

function Searchs() {

    const dispatch = useDispatch();

    const [order, setOrder] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")

    const searchM = useSelector(state => state.searchR)
    const names = useSelector(state => state.name)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(6)
    const lastMovie = currentPage * moviesPerPage
    const firstMovie = lastMovie - moviesPerPage
    const currentMovies = searchM.slice(firstMovie, lastMovie)

    useEffect(() => {
        dispatch(getNameMovies(""))
    }, [])

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handlerOrderByRanting(e) {
        e.preventDefault()
        dispatch(filterByRating(e.target.value, names, year, genre))
        order ? setOrder("asc") : setOrder("desc")
    }

    function handlerOrderByYear(e) {
        e.preventDefault()
        dispatch(filterByYear(order, names, e.target.value, genre))
        setYear(e.target.value)
    }

    function handlerOrderByGenre(e) {
        e.preventDefault()
        dispatch(filterByGenre(order, names, year, e.target.value))
        setGenre(e.target.value)
    }

    return (
        <div className="container">
            <div className="orders">
                <select onChange={(e) => handlerOrderByRanting(e)} defaultValue='default' className='order_r'>
                    <option value="default" disabled >Rating</option>
                    <option value="asc" >asc</option>
                    <option value="desc" >desc</option>
                </select>
                <select onChange={(e) => handlerOrderByYear(e)} defaultValue='default' className='order_r'>
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
                <select onChange={(e) => handlerOrderByGenre(e)} defaultValue='default' className='order_r'>
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
                    searchM.length > 0 ?
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
                        searchM={searchM.length}
                        paginado={paginado}
                        currentPage={currentMovies}
                    />
                </div>
            </div>
        </div>
    )
}

export default Searchs