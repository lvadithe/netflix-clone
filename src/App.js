import Nav from './components/secondary/Nav/Nav'
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

function App() {

  return <BrowserRouter>
    <Nav />
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  </BrowserRouter>
}


export default App
