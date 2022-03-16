
import Home from './components/principal/Home/Home'
import Login from './components/principal/Login/Login'
import Detail from './components/principal/Detail/Detail'
import Search from './components/principal/Search/Search'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import './App.css'
import { useSelector } from 'react-redux'


function App() {

  return <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  </BrowserRouter>
}

export default App
