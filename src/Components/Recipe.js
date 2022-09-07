import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Recipe() {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries/${id}?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => { console.log(err); })
    }, []);


    return (
        <h2>{id}</h2>
    );
}