import React from 'react'
import Banner from '../../secondary/Banner/Banner'
import Row from '../../secondary/Row/Row'
import "./home.css"

function Home() {

  return (
    <div className="home_container">
      <Banner />
      <div className="">
        <Row genre={[""]} description={"Weekly ranking"}/>
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