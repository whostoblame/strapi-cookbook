import {useParams} from "react-router-dom";
import axios from 'axios';
import {useEffect} from 'react' ;
export default function Recipe() {
    const {id}= useParams();
    useEffect(()=>{
        axios.get(`https://cdn.contentful.com/spaces/d6gach6xgkb5/environments/master/entries/${id}?access_token=ArEcNdHZeR9OpdsONr1H-_4VoboSlQjXiBeuYfu5RPo`)
            .then((res)=>{console.log(res.data)})
            .catch((err)=>{console.log(err)})
    },[])

    return <h1>{id}</h1>
}
