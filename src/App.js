import './App.css';
import Navbar from './Components/Navbar';
import { useNavigate } from "react-router-dom";
import Recipes from "./Components/Recipes";
import Home from "./Components/Home";
import {Routes, Route } from "react-router-dom";


function App() {

  const navigate = useNavigate();
 
  return (
  
      <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='/recipe' element={<Recipes />}/>
      </Routes>
    
  );
}

export default App;



/*<Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes> */