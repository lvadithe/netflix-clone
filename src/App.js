import Nav from './components/secondary/Nav/Nav'
import Home from './components/principal/Home/Home'
// import Login from './components/principal/Login/Login'
import Detail from './components/principal/Detail/Detail'
import Search from './components/principal/Search/Search'
import MovieCard from './components/principal/MovieCard/MovieCard'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="App">

        {/* <Routes>
          <Route path='/login' element={<Login />} />
        </Routes> */}

        <Nav />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/search' element={<MovieCard />} />
        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App
