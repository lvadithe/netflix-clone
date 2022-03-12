import Nav from './components/secondary/Nav/Nav'
import Home from './components/principal/Home/Home'
import Login from './components/principal/Login/Login'
import Detail from './components/principal/Detail/Detail'
import Search from './components/principal/Search/Search'

import { useSelector } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import './App.css'

function App() {

  const { user } = useSelector(state => state)

  const normalito =
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>

  const loginCoso =
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>

  return user.length > 0 ? normalito : loginCoso
}

export default App
