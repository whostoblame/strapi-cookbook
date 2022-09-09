import axios from "axios";
import { useState, useEffect } from "react";
import GetPictures from "./GetPictures";
import { useNavigate } from "react-router-dom";
export default function Recipes() {

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo")
      .then((res) => { setRecipes(res.data.items) })
      .catch((err) => { console.log(err) })
  }, [])


  return (
    <div>
      <h1>OUR RECIPES</h1>
      <div className="recipes-parent">
        {recipes.map((recipe, index) => {
          //console.log(recipe)
          return (
            <div className="recipe-container" key={recipe.sys.id} >
              <h2>{recipe.fields.header}</h2>
              <GetPictures id={recipe.fields.picture[0].sys.id} />
              {/* {recipe.fields.receiptText.content.map((content, i) => {

                if (content.nodeType === "paragraph") {
                  return (<p key={recipe.sys.id + i}> {content.content[0].value} </p>);
                }

              })} */}
              <button className="recipe-button" onClick={() => { navigate(`/recipes/${recipe.sys.id}`) }}>Start cooking!</button>
            </div>
          );
        })}
      </div>
    </div>)
};