import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { AiFillStar } from 'react-icons/ai'

import { getMoviesDetail } from '../../../redux/actions';
import LOGO from '../../../assets/logo_netflix.png';
import "./Detail.css";

function Detail() {

  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesDetail(id))
  }, [dispatch, id])

  const movieDetail = useSelector(state => state.detail)
  // console.log(movieDetail.background_image_original)

  const getGenres = () => {
    // const gen = movieDetail.map(e => e.genres)
    // const ge = gen.join(", ")
    // return ge
    return movieDetail.genres.join(", ")
  }

  const handleClick = (e) => {
    // We need to redirect the user to the youtube page of the trailer video
    window.open(`https://www.youtube.com/watch?v=${movieDetail.yt_trailer_code}`, "_blank")
  }

  return (
    <div className="container_detail">
      {
        // Ternary operator, if movie detail is not an empty object:

        movieDetail.id !== undefined ?
          <>
            <div className='background_content' style={{
              backgroundImage: `url(${movieDetail.background_image_original})`
            }}>
            </div>
            <div className='row_d'>
              <div className="movie_p_d">
                <img src={movieDetail.medium_cover_image} alt="" className="img_detail" />
                {movieDetail.yt_trailer_code.length > 0 &&
                  <button className="triler__button" onClick={handleClick}>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                  </button>
                }
              </div>
              <div className="info_d">
                <div className="subtitle">
                  {movieDetail.title}
                </div>
                <div className="year_d">
                  <h4>Year</h4>
                  {movieDetail.year}
                </div>
                <div className="genre_d">
                  {getGenres()}
                </div>
                <div className="rating">
                  <AiFillStar className='icon' />
                  <h4>rating </h4>
                  {movieDetail.rating}
                </div>
              </div>

            </div>

            <div className="description">
              {movieDetail.synopsis}
            </div>
            <div className="controls__detail">
              < button className="add__button">
                <span className='icon__add'>+</span>
              </button>
            </div>

          </>
          : <img className='loading_d' src={LOGO} alt="" />
      }
    </div >
  )
}

export default Detail
