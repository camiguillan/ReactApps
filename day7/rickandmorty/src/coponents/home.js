import React from 'react';
import {Link , useNavigate } from "react-router-dom";
//import './Home.css';
import { useState} from 'react';
import '../styless/home-style.scss';
import { useEffect, useContext } from 'react';
import Characters from './characters';
import { useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';
import { appContext } from '../App';



function Home() {
  const nav = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);
  const chars = useContext(appContext);

  //console.log(chars[0]);

  //path='/characters/?page=:pageId
  const page = useParams();

  /** */
    useEffect( () => {

      if(chars != null ){
        const firstChars = chars[0].slice(0,3);
        console.log(firstChars);
        setCharacters(firstChars);
        //console.log(characters);
      }
  }, [chars]);


    useEffect( ()=> {

      if(characters != null){
        setTimeout(
          ()=> setIsLoading(false)
        ,2000 );
        console.log(characters);
      }
    }, [characters]);


  return (
    <>

    {
    
    isLoading?
      <div className='ovaldiv'>
      <Oval></Oval>  
      </div>

      :

      
    <div>

 
      <div className='homeDiv'>
         <h1 className='homeH1'>  RICK AND MORTY </h1> 
        <Characters value = {"home"} ></Characters>
      </div>

      

        <div  className='homeDiv2' >
       
        <p className='homeP' > 
   
        Click to see all Rick and Morty's Characters    </p>
        {/* <button className='homeLink' onClick={()=>  nav("/characters") }>  View More Characters </button> */}
        {/*<button className='homeLink' onClick={()=>  nav( "/pagination?pageId=1&name=All") }>  View More Characters </button>*/}
        <button className="btn btn-primary btn-lg" onClick={()=>  nav( "/pagination?pageId=1&name=All") }>  View More Characters    </button>

     
         
      
{/*         
        <Link  className='homeLink' to="/pagination?pageId=1&name=All" > pages </Link>  */}
      </div>

    </div>

    }


    </>
 
  )
}


export default Home;

