import React from 'react'
import { Link } from "react-router-dom";
import "./searchd.css";

function SearchD({ title, img, id, genres }) {
    return (
        <div className="container_m">
            <div className="movie_card">

                <div className="body_m">
                    <div className="m_title">
                        {title}
                    </div>
                </div>

                <div>
                    <Link to={'/detail/' + id} >
                        <img src={img} alt="" className="m_img" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchD