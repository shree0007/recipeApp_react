import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Addrecipe from './pages/Addrecipe';
import Recipes from './pages/Recipes';
import Seemore from './pages/Seemore';
import About from './pages/About';
import Layout from './pages/Layout';



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
