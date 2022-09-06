import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar'
import GetPictures from "./Components/GetPictures"

function App() {

  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo")
      .then((response) => { setRecipes(response.data.items);
        //console.log(response.data.assets) 
       })
      .catch((err) => {console.log(err); })

  }, []);

/* save assets in a state. save img in array. */
  return (
    <div className="App">
       {recipes.map((recipe, index) => {
          
          
         return (
          <div key={recipe.sys.id}>
            <Navbar />
            <h2>{recipe.fields.header}</h2>
            <GetPictures recipe={recipe} />
           
          </div>
        );
      })} 
    </div>
  );
}

export default App;
