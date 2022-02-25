import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from "../../../redux/actions"
import Banner from '../../secondary/banner/Banner'
import Nav from '../../secondary/nav/Nav'
import Row from '../../secondary/Row/Row'
import "./home.css"

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())

  })

  return (
    <div className="home_container">

      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row genre={["Action"]} />
      <Row genre={["Comedy"]} />
      <Row genre={["Drama"]} />
      <Row genre={["Horror"]} />
      <Row genre={["Romance"]} />
    </div>
  )
}

export default Home