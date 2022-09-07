import axios from "axios";
import {useState, useEffect} from "react";


export default function GetPictures({id}) {

    const [img, setImg] = useState()
    useEffect(()=>{

        axios.get(`https://preview.contentful.com/spaces/d6gach6xgkb5/environments/master/assets/${id}?access_token=-a1pu0dqYGnV2VkL1juU49xpUz_Ht49i30ndE_J94gc`)
            .then((res) =>{
              console.log(res.data)
                setImg(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }, []);
          
            return (
              <>{img && <img src={img.fields.file.url}/>} </>
            );
          }


    //remove navar; Style img 