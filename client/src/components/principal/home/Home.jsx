import React from 'react'
import Banner from '../../secondary/banner/Banner'
import Nav from '../../secondary/nav/Nav'
import "./home.css"

function Home() {
  return (
    <div className="home_container">

        {/* Nav */}
        <Nav />
        {/* Banner */}
        <Banner />
        {/* Row */}
    </div>
  )
}

export default Home