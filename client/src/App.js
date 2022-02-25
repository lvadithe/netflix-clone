import './App.css';
import Home from './components/principal/home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/secondary/nav/Nav';
import Detail from './components/principal/detail/Detail';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;




/* const axios = require('axios');
const aUrl =  axios.get('https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50');
console.log(aUrl) */