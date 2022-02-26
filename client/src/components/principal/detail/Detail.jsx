import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesDetail } from '../../../redux/actions';
import "./detail.css";


function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const movieDetail = useSelector(state => state.detail)

  useEffect(() => {
    dispatch(getMoviesDetail(id))
  }, [dispatch, id])

  return (
    <>
    </>
  )
}

export default Detail