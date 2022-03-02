import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClean } from "../../../redux/actions"
import Banner from '../../secondary/banner/Banner'
import Nav from '../../secondary/nav/Nav'
import Row from '../../secondary/Row/Row'
import Searchs from '../searchs/Searchs'
import "./home.css"

function Home() {

  const searchM = useSelector(state => state.searchR)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getClean())
  }, [])

  return (

    <div className="home_container"> 
      {/*     <Searchs /> */}
            <Banner />
            <div className="">
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