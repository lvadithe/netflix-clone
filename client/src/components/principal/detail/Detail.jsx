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
  console.log(movieDetail)
  return (
    <div className="container_detail">
      {
        movieDetail.length > 0 ?
          <>
            <div className="background_content">
              <img src={movieDetail[0].large_cover_image} alt="" className="img_detail" />
            </div>
            <div className="subtitle">
              {movieDetail[0].title_long}
            </div>
            <div className="description">
              {movieDetail[0].synopsis}
            </div>
            <div className="rating">
              <AiFillStar className='icon'/>
              <h4>rating </h4>
              {movieDetail[0].rating}
            </div>
            <div className="controls__detail">
              <button className="triler__button">
                <img src="/images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
              </button>
              <button className="add__button">
                <span className='icon__add'>+</span>
              </button>
            </div>
          </>
          : <p >LOADING...</p>
      }
    </div>
  )
}

export default Detail