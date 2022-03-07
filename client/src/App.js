import './App.css';
import Home from './components/principal/home/Home';
import Nav from './components/secondary/nav/Nav';
import Detail from './components/principal/detail/Detail';
import SearchD from './components/principal/search/SearchD';
import Searchs from './components/principal/searchs/Searchs';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/principal/login/Login';

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
          <Route path='/searchs' element={<Searchs />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/search' element={<SearchD />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;




/* const axios = require('axios');
const aUrl =  axios.get('https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50');
console.log(aUrl) */