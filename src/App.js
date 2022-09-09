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
        console.log(response.data.items) 
       })
      .catch((err) => {console.log(err); })

  }, []);

/* save assets in a state. save img in array. */
  return (
    <div className="App">
      
       {recipes.map((recipe, index) => {
         return (
          <div key={recipe.sys.id} >
            <h2>{recipe.fields.header}</h2>
            <GetPictures id={recipe.fields.picture[0].sys.id}/>  
            {recipe.fields.receiptText.content.map((content,i) => {
                return (<p className="paragraph"  key={recipe.sys.id+i}> {content.content[0].value} </p>);
            })}
           
          </div>
        );
      })} 
    </div>
  );
}

export default App;
