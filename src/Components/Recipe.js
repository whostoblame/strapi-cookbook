import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import GetPictures from "./GetPictures";


export default function Recipe() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        axios.get(`https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries/${id}?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo`)
            .then((res) => {
                setRecipe(res.data)
            })

            .catch((err) => { console.log(err) })
    }, [])

    return <div>
        {recipe && <>
            <div className="recipe-hero">
                <h1>{recipe.fields.header}</h1>
                <GetPictures id={recipe.fields.picture[0].sys.id} />
            </div>
            <div className="recipe-text">
                {recipe.fields.receiptText.content.map((content, i) => {

                    if (content.nodeType === "paragraph") {
                        return (<p key={recipe.sys.id + i}> {content.content[0].value} </p>);
                    }

                })}
            </div>

        </>}
    </div>

}
