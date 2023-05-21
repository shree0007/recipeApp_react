import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Seemore from './pages/Seemore';
import Addrecipe from './pages/Addrecipe';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='recipes' element={<Recipes />} />
            <Route path='/:id' element={<Seemore />} />
            <Route path='addrecipe' element={<Addrecipe />} />
            <Route path='about' element={<About />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
