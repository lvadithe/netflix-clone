import React from 'react'
import { useSelector } from 'react-redux'
import SearchD from '../search/SearchD'

function Searchs() {
    const searchM = useSelector(state => state.searchR)

    return (
        <div className="container">
            {
                searchM.length > 0 ?
                    searchM.map(el => {
                        return (
                            <SearchD title={el.title} img={el.small_cover_image} id={el.id} />
                        )
                    }) :
                    <h1>Loading....</h1>
            }
        </div>
    )
}

export default Searchs