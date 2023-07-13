import React from 'react'
import { Link,  useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
//import './Profile.css';
import '../styless/profile-style.scss';
import { Navigate, useNavigate, useParams, Route } from 'react-router-dom';
import { Oval } from  'react-loader-spinner';
import { useQuery} from "react-query";
import { appContext } from "../App";


//https://rickandmortyapi.com/api/character/2
//https://rickandmortyapi.com/api/character/{props.char.id}

function Profile() {
    const [currentC, setCurrentC] = useState({
        id:'',
        name:'',
        status:'',
        species:'',
        type:'', 
        gender:'',
        image: '',
        location:{},
        origin:{},
        episode: []
    });
    const [isLoading, setIsLoading]  = useState(true);
    const navigate = useNavigate();
    const charId = useParams();
    const firstPage = useContext(appContext); 
    //const [butText, setButText] = useState('Show Episodes details');
    //console.log(data);


 

    useEffect( () => {
        console.log('usingParams in profile', charId.id)
        const url = "https://rickandmortyapi.com/api/character/" + charId.id;
        //console.log(url);
        getChar(url);
        loadingTimeOut();
      
      }, []);


 
    
function loadingTimeOut(){
  setTimeout(
    ()=> setIsLoading(false)
  ,1000 );

}
    
     async function getChar(url){
       await  axios
            .get(url)
            .then( response  => {
              const getC =  response.data;      
              //console.log(response);       
              setCurrentC({
                id: getC.id,
                name:getC.name,
                status: getC.status  ,
                species:getC.species,
                type: getC.type , 
                gender:getC.gender,
                location:{
                    name:getC.location.name
                },
                origin:{
                    name: getC.origin.name
                }, 
                image: getC.image,
                episode: getC.episode
              });
            
             //console.log(currentC);
            //  console.log(currentC);
            //  console.log(getC);
            //  console.log(currentC.location);
            //  console.log(currentC.location.name);
            })
            .catch(error =>{ console.log(error);
               navigate("/");
              
              });  
    
      }


      function handleClick(){
        navigate( "/characters/"+ currentC.id + "/episodes" , {state: currentC}) ;
      }




  return (
    <>
    { isLoading? 
    
    <div className='ovaldiv'>
    <Oval className='oval' /> 
    </div>
    
    :

      
      <div className='divProfile'>

      <h1 className='h1Profile'> Character Profile: {currentC.name}
        </h1>
        

        <div className='profile'>
       
            <img  className='imgP' src= {currentC.image} alt='' ></img>
          

            <ul  className='infoP'>
                <li> <b> Status: </b>   {currentC.status}   </li>
                <li>  <b>Species: </b> {currentC.species}    </li>
                <li> <b>  Gender:</b>  {currentC.gender}</li>
                <li> <b> Origin: </b> {currentC.origin.name}  </li>
                <li> <b>  Location:  </b> {currentC.location.name}  </li>
                <li> <b> Number of Episodes:   </b> {currentC.episode.length} 
                

                {/* <Navigate  to={'/characters/' + currentC.id + '/episodes'} state={currentC} >   
                View EPisodes Details    </Navigate> */}
                {/* <button onClick={viewdetails()} > Show Episodes Details </button> 
                { showE && <div className='container-titles'> {showEpisodes} </div>} */}
                
                </li>

                <button className='viewEps' onClick = {handleClick }> View episodes details
                  </button>
            </ul>
       

            </div>
          <div className='divlink'>
                         
          <button className='linkProfile' onClick={()=>  navigate("/") }> Go Home </button>
          <button className='linkProfile' onClick={()=>  navigate("/pagination?pageId=1&name=All") }>  Go to Characters </button>
        
           
      </div>

    </div>}

    </>
  
  )
}


export default Profile;
