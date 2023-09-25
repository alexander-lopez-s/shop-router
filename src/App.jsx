import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Furniture from './components/Furniture';
import Sunglasses from './components/Sunglasses';
import Decoration from './components/Decoration';
import Shoes from './components/Shoes';
import NoPage from './components/NoPage';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
