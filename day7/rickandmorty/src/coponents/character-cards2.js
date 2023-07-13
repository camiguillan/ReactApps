import React, { useContext } from 'react';
//import './App.css';
import '../styless/cards-style.scss';
import { useState, useRef } from 'react';
import { useEffect, createContext } from 'react';
import axios from 'axios';
import Characters from './characters';
import { Oval } from  'react-loader-spinner';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { appContext } from '../App';



export const charsContextCards2 = createContext();


function CharacterCards2(props) {
   //creating the list where all the characters will be saved
   const [characters, setCharacters] = useState([]);
   const [pageInfo, setPageInfo] = useState({});
   const [isLoading, setIsLoading]  = useState(true);
   var firstPage = useContext(appContext);
   var pageNum = (props.value);
   //var pageNumRef = useRef(pageNum);
   var filter = props.filterCode; // filter name 

     
   //useEffect to fetch api data only one time when it is rendered, passing []

  //  useEffect( ()=> {
  //   setNumPages();
  // },[props.pageInfo, filter]);

   useEffect(() => {
    //const numPages = props.pageinfo.pages;
    if(pageNum  ){                   
      if(pageNum == 1 && filter === 'All' ){
        setPageInfo(firstPage[1]);
        setCharacters(firstPage[0]);
        loadingTimeOut();
      }
      else
      {
        //console.log("pageNUm:",pageNum, "PageNUmRef:",pageNumRef.current);
        firstPage = undefined;
        //pageNumRef.current = pageNum;
        setIsLoading(true);
        setNumPages(); 

      }
    }

  }, [pageNum, filter]);

  async function setNumPages(){
    var url;
    switch(filter){
      case "All": {
                   url = "https://rickandmortyapi.com/api/character?page=" + pageNum;
                   if(pageNum == 1){
                    loadingTimeOut();
                    setPageInfo(firstPage[1]);
                    setCharacters(firstPage[0]);
                   
                   }
                   else{
                    await getChars(url);
                   }
                 
                  }
        break;
      case "Rick": { 
                    
                    url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=rick';
                    await getChars(url);
                 
                  }
        break;

      case "Morty": {  url = 'https://rickandmortyapi.com/api/character/?page='+ pageNum + '&name=morty';
                      await getChars(url);
        
                    }
        break;       
    }
    console.log(filter, pageNum);
  }

function loadingTimeOut(){
  setTimeout(
    ()=> setIsLoading(false)
  ,1000 );

}

 
   async function getChars(url){
    await axios
         .get(url)
         .then(response => {
           const getChars = response.data.results;
           setPageInfo(response.data.info);
           setCharacters(getChars);
           loadingTimeOut();
          // setIsLoading(false);
         })
         .catch(error => console.log(error));  
 
   }
 
 



   return (
     <>
 
      { isLoading? 
      
        <div className='ovaldiv'>
        <Oval></Oval>  
        </div>
        
        :
        <>
        <header className="header">  
 
      <nav>
     
          <Stack spacing={4}>
              
              <Pagination className='pagination' count={pageInfo.pages} 
                variant="outlined" shape="rounded"
                onChange={props.handlepageChange}
                page={
                  pageNum?
                    parseInt(pageNum)
                  : 0}
                />

            </Stack>          
        </nav>
        
      </header>

      <charsContextCards2.Provider value={characters} >
      <div className="App">
      {/* <Characters char={characters}></Characters> */}
      <Characters value= {"charsPage"+pageNum+filter } ></Characters>
      </div> 
      </charsContextCards2.Provider>



      </>
      } 
     
     </>
  
   );
 }



export default CharacterCards2;
