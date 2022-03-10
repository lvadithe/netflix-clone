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
        <div className="filtersContainer">
            <select onChange={(e) => handleInputChange(e)} name="order" className="order_r" defaultValue="default">
                <option value="default" disabled >Rating</option>
                <option value="asc" >asc</option>
                <option value="desc" >desc</option>
            </select>

            <div className="yearInput" >
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="year1"
                    className="order_r"
                    type="number"
                    placeholder="From year..." />
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="year2"
                    className="order_r"
                    type="number"
                    placeholder={`To year: ${new Date().getFullYear()}`} />
            </div>

            <select onChange={(e) => handleInputChange(e)} name="genre" className="order_r" defaultValue="default">
                <option value="default" disabled >Genre</option>
                {genres?.map((el, i) => <option key={i} name={el} value={el}>{el}</option>)}
            </select>
        </div>
    )
}

export default SearchFilters
