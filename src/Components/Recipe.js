import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Recipe() {
    const { id } = useParams();
    const [header, setHeader] = useState();
    const [picture, setPicture] = useState();
    const [text, setText] = useState();

    useEffect(() => {
        axios.get(`https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries/${id}?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo`)
            .then((response) => {
                setHeader(response.data.fields.header)
                setPicture(response.data.fields.picture)
                // setText(response.data.fields.receiptText)
                console.log(response.data)
            })
            .catch((err) => { console.log(err); })
    }, []);


    return (
        <div>
            <h2>{id}</h2>
            <h2>{header}</h2>
            <img src={picture} />
            {/* <p>{text}</p> */}
        </div>
    );
}