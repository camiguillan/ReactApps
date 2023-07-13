import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { charsContextCards2 } from "./character-cards2";
import { appContext } from "../App";
import { useEffect, useState} from 'react';



function Characters(props){
    const navigate = useNavigate();
    const charId = useParams();
     const chars = useContext(charsContextCards2);
    const [characters, setCharacters] = useState([]);

    // use this to show first 3 chars in Home page 
    //use this to show firs page in characters page 
    const charsInfo = useContext(appContext); 
    var pageCode = props.value; 


    useEffect( () => {

        if(charsInfo != null ){
            if(pageCode === 'home'){
                const firstChars = charsInfo[0].slice(0,3);
                setCharacters(firstChars);
                         }
            else if(pageCode === 'charsPage1All'){
                setCharacters(charsInfo[0]);
            }
            else{
                setCharacters(chars);
            }
        }
    }, [pageCode]);



    function handleClick(e){
        console.log(  'using params', charId.id, charId);
        navigate( "/characters/"+ e.currentTarget.id , {state: e.currentTarget.id});
    }

return (

    <div className="row">
         {
             characters.map(
                ( char, index) => 
                <div key={index} className="column">
                     <div  className="cardProfile"   id={char.id.toString()}  onClick={handleClick}  >
                         <img src={char.image} alt='' ></img>
                         <h5> {char.name} </h5>
                         <div className="cinfo" >
                             
                             <p>  <b> Species:</b> {char.species} </p>
                             <p><b> Origin:</b>  {char.origin.name} </p>
                            
                         </div>
                     
                      </div>
     
                 </div>
             )
       }

    </div>

);



}


export default Characters;