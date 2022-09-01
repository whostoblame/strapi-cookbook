import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar'

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get("https://preview.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=-a1pu0dqYGnV2VkL1juU49xpUz_Ht49i30ndE_J94gc")
      .then((response) => { setRecipes(response.data.items) })
      .catch((err) => { console.log(err) })
  }, []);


  return (
    <div className="App">
      <Navbar />
      {recipes.map((recipe, index) => {
        console.log(recipe);
        return (
          <div key={recipe.sys.id}>
            <h2>{recipe.fields.header}</h2>
            <img src={`https:${recipe.fields.picture}`} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
