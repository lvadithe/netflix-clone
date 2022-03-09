import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './SearchFilters.css'

const SearchFilters = ({ handleInputChange }) => {

    // Nos traemos los géneros desde el backend
    const [genres, setGenres] = useState([])

    const API_URL = "https://vadith-moviesapp-backend.herokuapp.com/genres"
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(API_URL)
            setGenres(result.data)
        }
        fetchData()
    }, [])

    return (
        <div className="orders">
            <select onChange={(e) => handleInputChange(e)} name="order" className="order_r" defaultValue="default">
                <option value="default" disabled >Rating</option>
                <option value="asc" >asc</option>
                <option value="desc" >desc</option>
            </select>

            <div className="yearInput">
                {/* We need to display to inputs for two different years. They will be the years be pass to the handleInputChange function: */}
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="year1"
                    className="year_r"
                    type="number"
                    placeholder="From year..." />    {/* Este es el input del usuario */}
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="year2"
                    className="year_r"
                    type="number"
                    placeholder={`To year: ${new Date().getFullYear()}`} />    {/* Este es el input del usuario */}
            </div>

            {/* <select onChange={(e) => handleInputChange(e)} name="year" className="order_r" defaultValue="default">
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
            </select> */}
            <select onChange={(e) => handleInputChange(e)} name="genre" className="order_r" defaultValue="default">
                <option value="default" disabled >Genre</option>
                {genres?.map((el, i) => <option key={i} name={el} value={el}>{el}</option>)}
            </select>
        </div>
    )
}

export default SearchFilters
