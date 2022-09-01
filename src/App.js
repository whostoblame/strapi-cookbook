import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar'

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo")
      .then((response) => { setRecipes(response.data.items);
        console.log(response.data) 
       })
      .catch((err) => {console.log(err); })
  }, []);

/* save assets in a state. save img in array. */
  return (
    <div className="App">
       {recipes.map((recipe, index) => {
          console.log(recipe)
         return (
          <Navbar />
          <div key={recipe.sys.id}>
            <h2>{recipe.fields.header}</h2>
            {recipe.fields.picture?.map((picture, index) =>{
               console.log(picture.id)
            })}
            {/*for each/map if ids are the same. iterate over the other array and find right ID. If url includes picture.id*/}
           {/* */}
           
          </div>
        );
      })} 
    </div>
  );
}

export default App;
