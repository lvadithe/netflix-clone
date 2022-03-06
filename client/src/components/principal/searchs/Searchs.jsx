import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PaginateF from '../../functional/paginateF/PaginateF'
import SearchD from '../search/SearchD'
import "./searchs.css";

function Searchs() {

    const searchM = useSelector(state => state.searchR)
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(6)
    const lastMovie = currentPage * moviesPerPage
    const firstMovie = lastMovie - moviesPerPage
    const currentMovies = searchM.slice(firstMovie, lastMovie)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="container">
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