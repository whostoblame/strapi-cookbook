import './App.css';
import Navbar from './Components/Navbar';
import Recipes from "./Components/Recipes";
import { Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe";
import Submit from './Components/Submit';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Recipes />} />
        <Route path='/recipes/:id' element={<Recipe />} />
        <Route path='/recipes/submit' element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;



/*<Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes> */