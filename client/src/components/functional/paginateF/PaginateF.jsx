import React, { useEffect } from 'react';
import "./paginatef.css";

function PaginateF({ moviesPerPage, movies, paginado }) {

    const pageNumers = []

    for (let i = 1; i <= Math.ceil(movies / moviesPerPage); i++) {
        pageNumers.push(i)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className='center_m'>
            <div className="pagination_m">
                {
                    pageNumers?.map(num => (
                        <li key={num}>
                            <button className="button_m" onClick={() => paginado(num)}>{num}</button>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default PaginateF