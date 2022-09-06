import axios from "axios";
import {useState, useEffect} from "react";

export default function GetPictures() {

    const [img, setImg] = useState([])
    useEffect(()=>{

        axios.get(`https://preview.contentful.com/spaces/d6gach6xgkb5/environments/master/assets?access_token=-a1pu0dqYGnV2VkL1juU49xpUz_Ht49i30ndE_J94gc`)
            .then((res) =>{
                const imageArray = res.data.items.filter(
                    (obj) => obj.fields.file && obj
                  );
                  setImg(imageArray);
                })
                .catch((err) => {
                  console.log(err);
                });
            }, []);
          
            return (
              img &&
              img.map((eachImg) => {
                console.log(img);
                return <img src={eachImg.fields.file.url} />;
              })
            );
          }
}

    