import './App.css';
import Navbar from './Components/Navbar';
import { useNavigate } from "react-router-dom";
import Recipes from "./Components/Recipes";
import {Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe";


function App() {

  const navigate = useNavigate();
 
  return (
  
      <Routes> 
      <Route path='/' element={<Recipes />}/>
      <Route path='/recipes/:id' element={<Recipe />}/>
      </Routes>
    
  );
}

export default App;



/*<Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes> */