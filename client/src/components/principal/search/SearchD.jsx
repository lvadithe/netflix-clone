import React from 'react'
import { Link } from "react-router-dom";

function SearchD({ title, img, id }) {
    return (
        <div className="container_m">
            <div className="movie_card">
                <div className="m_title">
                    {title}
                </div>
                <div>
                    <Link to={'/detail/' + id} className="detail_m" >
                        <div className="m_img">
                            <img src={img} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchD