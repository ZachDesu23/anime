import HomePage from './Pages/Hompage';
import './App.css';
import {Route,  Routes} from 'react-router-dom';
import AnimeDetail from './Pages/AnimeDetailsPage';

function App() {
  return (
  
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/animeDetail/:id' element={<AnimeDetail/>}/>
    </Routes>
  );
}

export default App;
