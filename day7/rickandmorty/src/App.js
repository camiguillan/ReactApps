import React from 'react';
//import './App.css';
import './styless/app-styles.scss';
import { Route, Routes, Link, Navigate, useNavigate} from "react-router-dom";
import Pages from './pagination';
import Profile from './coponents/profile';
import CharacterCards from './coponents/character-cards';
import Home from './coponents/home';
import Episodes from './coponents/episodes';
import CharacterCards2 from './coponents/character-cards2';
import { QueryClient, QueryClientProvider } from "react-query";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Oval } from  'react-loader-spinner';


export const appContext = createContext();


/* character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

/* {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  } */

function App() {
  const queryclient = new QueryClient();
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoading, setIsLoading]  = useState(true);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await getChars(url);
    setCharacters(data.results);
    setPageInfo({
      count: data.info.count,
      pages: data.info.pages,
      next: data.info.next,
      prev: data.info.prev,
    });
    setIsLoading(false);
  }
  
  useEffect(() => {
    setIsLoading(false);
  }, [characters, pageInfo]);
  

 async function getChars(url){
    var chars;
   await axios
        .get(url)
        .then(response => {
          chars = response.data;
                  })
        .catch(error => console.log(error));  

        return chars;

  }

  return (

    <> 

   {  isLoading?

   <div>
      <Oval></Oval>
   </div>


      :  
  
   <appContext.Provider value={[characters, pageInfo]} >
    <QueryClientProvider client={queryclient} >



      <Routes>
      <Route path="/pagination" element= {<Pages />} /> 
      {/* <Route path='/characters?pagenum=:pageId' element= {<CharacterCards2 />} /> */}
       <Route path="/characters/:id" element={<Profile />} />       
       <Route path="/characters/:id/episodes" element={<Episodes />} />  
       <Route path="/" element= {<Home />} />       
       <Route path='*' element={ <Navigate to="/" /> }/>
       {/* <Route path='/characters' element= {<CharacterCards />} > </Route> */}
    </Routes>



    </QueryClientProvider> 
    </appContext.Provider>  
   }
    
    </>
 
  );
}

export default App;


