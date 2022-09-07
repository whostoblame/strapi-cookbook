import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar';
import { useNavigate } from "react-router-dom";
import Recipe from './Components/Recipe';
import GetPictures from "./Components/GetPictures"

function App() {

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo")
      .then((response) => {
        setRecipes(response.data.items);
        //console.log(response.data.assets) 
      })
      .catch((err) => { console.log(err); })
  }, []);

  const changePage = (id) => {
    navigate(`/recipes/${id}`)
  }

  /* save assets in a state. save img in array. */
  return (
    <div className="App">


      <Navbar />
      {recipes.map((recipe, index) => {
        console.log(recipe)
        return (
          <div key={recipe.sys.id} >
            <h2>{recipe.fields.header}</h2>
            <GetPictures id={recipe.fields.picture[0].sys.id} />
            <button onClick={() => { changePage(recipe.sys.id) }}>View more</button>
            {recipe.fields.receiptText.content.map((content, i) => {

              if (content.nodeType === "paragraph") {
                return (<p key={recipe.sys.id + i}> {content.content[0].value} </p>);
              }

            })}

          </div>
        );
      })}
    </div>
  );
}

export default App;
