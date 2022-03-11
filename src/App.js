import Nav from './components/secondary/Nav/Nav'
import Home from './components/principal/home/Home'
import Detail from './components/principal/Detail/Detail'
import Searchs from './components/principal/searchs/Searchs'
import MovieCard from './components/principal/MovieCard/MovieCard'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Login from './components/principal/Login/Login';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>

        {/* <Nav />
        
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/searchs' element={<Searchs />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/search' element={<MovieCard />} />
        </Routes> */}

      </div>
    </BrowserRouter>

  )
}

export default App




/* const axios = require('axios');
const aUrl =  axios.get('https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50');
console.log(aUrl) */