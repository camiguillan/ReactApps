import React from 'react';
//import './App.css';
import '../app-styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Characters from './characters';
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from  'react-loader-spinner';

export default function getChars(props) {
    const url = props.url;
    const [characters, setCharacters] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading]  = useState(true);

   //path='/characters/?page=:pageId
   const page = useParams();


   
   //useEffect to fetch api data only one time when it is rendered, passing []
   useEffect(() => {
     //getting all characters 
     // const url = "https://rickandmortyapi.com/api/character/?page =" + page.pageId ;
     const url = "https://rickandmortyapi.com/api/character";
     getChars(url);
       
   }, []);
 
   async function getChars(url){
    await axios
         .get(url)
         .then(response => {
           const getChars = response.data.results;
           // console.log(getChars);
           setPageInfo(response.data.info);
           // console.log(characters);
          
           setCharacters(getChars);
           setIsLoading(false);
           // console.log(nextInfo);
           // console.log(pageInfo.next);
         })
         .catch(error => console.log(error));  
 
   }
 
  return (
    <div>getChars</div>
  )
}
