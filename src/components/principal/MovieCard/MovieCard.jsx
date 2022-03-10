import React from 'react'
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ title, img, id }) {


    return (
        <div className="container_movie_card">
            <div className="movie_card">
                <div className="body_img">
                    <Link to={'/detail/' + id} >
                        <img src={img} alt="" className="m_img" />
                    </Link>
                </div>
                <div className="body_m">
                    <div className="m_title">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
