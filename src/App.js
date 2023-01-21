import HomePage from './Pages/Hompage';
import './App.css';
import {Link, Route, Router, Routes} from 'react-router-dom';
import AnimeDetail from './Pages/AnimeDetailsPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/animeDetail/:id' element={<AnimeDetail/>}/>
    </Routes>
    </Router>
  );
}

export default App;
