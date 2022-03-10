import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { AiFillStar } from 'react-icons/ai'

import { getMoviesDetail } from '../../../redux/actions';
import "./detail.css";


function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesDetail(id))
  }, [dispatch, id])

  const movieDetail = useSelector(state => state.detail)

  const handleClick = (e) => {
    // We need to redirect the user to the youtube page of the trailer video
    window.open(`https://www.youtube.com/watch?v=${movieDetail[0].yt_trailer_code}`, "_blank")
  }

  return (
    <div className="container_detail">
      {
        movieDetail.length > 0 ?
          <>
            <div className="background_content">
              <img src={movieDetail[0].background_image_original} alt="" className="img_detail" />
            </div>
            <div className="subtitle">
              {movieDetail[0].title_long}
            </div>
            <div className="description">
              {movieDetail[0].synopsis}
            </div>
            <div className="rating">
              <AiFillStar className='icon' />
              <h4>rating </h4>
              {movieDetail[0].rating}
            </div>
            <div className="controls__detail">
              {movieDetail[0].yt_trailer_code.length > 0 &&
                <button className="triler__button" onClick={handleClick}>
                  <img src="/images/play-icon-white.png" alt="" />
                  <span>TRAILER</span>
                </button>
              }
              < button className="add__button">
                <span className='icon__add'>+</span>
              </button>
            </div>
          </>
          : <p >LOADING...</p>
      }
    </div >
  )
}

export default Detail