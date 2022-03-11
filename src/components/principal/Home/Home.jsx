import React from 'react'
import Row from '../../secondary/Row/Row'
import Banner from '../../secondary/Banner/Banner'

import "./Home.css"


function Home() {

  return (
    <div className="home_container">
      <Banner />
      <div className="">
        <Row genre={[""]} description={"Weekly ranking"} />
        <Row genre={["Action"]} />
        <Row genre={["Comedy"]} />
        <Row genre={["Drama"]} />
        <Row genre={["Horror"]} />
        <Row genre={["Romance"]} />
      </div>
    </div>
  )
}

export default Home
