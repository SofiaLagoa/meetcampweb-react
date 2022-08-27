import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import About from './pages/about';
import 'bulma/css/bulma.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path='/' element={<Home />} />
        {/* game */}
        <Route path='/game' element={<Game />} />
        {/* about */}
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
