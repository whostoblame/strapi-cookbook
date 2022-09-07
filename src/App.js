import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Components/Navbar';
import { useNavigate } from "react-router-dom";
import Recipe from './Components/Recipe';


function App() {

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([])
  const [header, setHeader] = useState("")

  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo")
      .then((response) => {
        setRecipes(response.data.items);
        setHeader(response.data.items.fields.header)
        console.log(response.data)
      })
      .catch((err) => { console.log(err); })
  }, []);

  const changePage = (id) => {
    navigate(`/recipes/${id}`)
  }

  /* save assets in a state. save img in array. */
  return (
    <div className="App">
      {recipes.map((recipe, index) => {
        return (
          <div key={recipe.sys.id} >
            <Navbar />
            <Recipe />
            <h2>{header}</h2>
            <button onClick={() => { changePage(recipe.sys.id) }}>View more</button>
            {recipe.fields.receiptText.content.map((content, i) => {

              if (content.nodeType === "heading-1") {
                return (<h3 key={recipe.sys.id + i}> {content.content[0].value} </h3>);
              }

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
