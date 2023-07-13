import React from 'react';
import { useState, useEffect,  useContext } from 'react';
import CharacterCards2 from './coponents/character-cards2';
import { useNavigate, useSearchParams } from "react-router-dom";
import { appContext } from './App';
import './styless/pagination-style.scss';



export default function Pages() {
  const [pageInfo, setPageInfo] = useState({});
  const [currentpage, setCurrentP] = useState();
  //charactrs per page: 20 -> info provided by api 
  const nav = useNavigate();
  const [searchp] = useSearchParams();
  //console.log(searchp.get('pageId'));
  const info = useContext(appContext);
  var pageNum = searchp.get('pageId');
  var filterChar = searchp.get("name"); 
  const [currentName, setName] = useState();
  const [nameList, setNameList] = useState([]); 
  // console.log(nameList);

  useEffect(() => {
    setCurrentP( pageNum );
    setName(filterChar);
  }, []);
  
  
  useEffect(() => {
    setPageInfo(info[1]); 
    setNameOrder(currentName);     
    //console.log(pageInfo); 
  }, [pageInfo, currentName]);



  function handlepageChange(event,value){
    setCurrentP(value);
    nav("/pagination?pageId=" + value + "&name=" + filterChar);
  }


  function setNameOrder(name){
    switch(name){
      case 'All': {   const allfirst = ["All", "Rick", "Morty"];
                      setNameList(allfirst);
                      // console.log(nameList);
                     }
        break;
      

        case 'Rick':{ 
                      const rickFirst = (["Rick", "Morty", "All"]);
                      setNameList(rickFirst);
                   }
        break;

        case 'Morty' : {
                           const mortyFirst = [ "Morty", "All","Rick"]; 
                           setNameList(mortyFirst);                 
                        }

        break;
      }
  

    
  }

  function nameSelected(event){
    var url;
    setName(event.target.value);
    setCurrentP(1);
    setNameOrder(event.target.value);
    nav("/pagination?pageId=" + currentpage + "&name=" + event.target.value );
}

  return (
    <div>

      <header className='headerP'>
      <h1>  RICK AND MORTY </h1> 

      <nav>
      <button className='nav-buttons'  onClick={() => nav("/")} > 
        {/* <Link to="/" > Go Home </Link> </button> */}
        Go Home </button>

        <select className='select-filter' onChange={nameSelected} >
          {nameList.map(item => {
                return (<option key={item} value={item}>{item}</option>);
          })}
          </select>

        </nav>
      </header>
      
  
    {/*    
    <CharacterCards2 value={currentpage} ></CharacterCards2> */}
    <CharacterCards2 pageInfo={pageInfo} 
        handlepageChange={handlepageChange} value={currentpage}  filterCode = {currentName}  />
    {/* {console.log(currentName)} */}
    </div>
    
  
  );
}

