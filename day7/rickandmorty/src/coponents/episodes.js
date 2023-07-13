import React, { useEffect,useContext, useState} from 'react';
import axios from 'axios';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import '../styless/episodes-style.scss';
import { Oval } from  'react-loader-spinner';
import { useQuery} from "react-query";
import { appContext } from '../App';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);  
  const [isloading, setIsLoading] = useState(true);
  const charId = useParams();
  const navigate = useNavigate();
  // const [currentC, setCurrentC] = useState({
  //   id:'',
  //   name:'',
  //   status:'',
  //   species:'',
  //   type:'', 
  //   gender:'',
  //   image: '',
  //   location:{},
  //   origin:{},
  //   episode: []
  // });

  const appChars = useContext(appContext);

  const url = "https://rickandmortyapi.com/api/character/" + charId.id;
  const {data: currentCharData, status: currentCharStatus} = useQuery("currentChar", async () =>await getData(url));
                                                                                              
  useEffect(() => {
    console.log(currentCharData);
    tryGetEps();
    
    if(episodes.length> 0){
      setIsLoading(false);
    }
 

  }, [currentCharData]);

    
  useEffect(() => {

    if(episodes.length> 0){
      setIsLoading(false);
    }
  }, [currentCharData, episodes.length]);




  async function tryGetEps(){
    if(currentCharStatus == 'success'){
      if (currentCharData && currentCharData.episode && currentCharData.episode.length > 0) {
        await fetchEpisodes(currentCharData.episode);
        console.log(currentCharData.episode);
      
      }
     } 
    
  }

  async function getData(url) {
    try {
      const response = await axios.get(url);
      return {
        id: response.data.id,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        type: response.data.type, 
        gender: response.data.gender,
        location: {
          name: response.data.location.name
        },
        origin: {
          name: response.data.origin.name
        }, 
        image: response.data.image,
        episode: response.data.episode
      };
    }
    catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  async function fetchEpisodes(episodeUrls) {
    const episodeIds = episodeUrls.map(url => url.split('/').pop()); //returns last element -> id
    console.log(episodeIds);
    const url =  "https://rickandmortyapi.com/api/episode/" + episodeIds.join();
    console.log(url);

    await axios
          .get(url)
          .then(response =>{
            var arrEps;           
            if( response.data.length>0){
              arrEps = response.data;
            }
            else {
              arrEps = [response.data];
              
            }
            
            setEpisodes(arrEps);
            console.log(arrEps, response.data.length);
            console.log(episodes.length);
          })
          .catch(error => console.log(error));  
  }

  const showEps = episodes.length > 0 && episodes.map((ep,index) => {    
    return (
      <div key={index} className='divep' >
        <ul className='infoep' >
          <li>Episode: {ep.episode}</li>
          <li>Episode Name: {ep.name}</li>
          <li>Episode airdate: {ep.air_date}</li>
        </ul>
      </div>
    );
  });

  return (
    <>
      {isloading ? 
        <div className='ovaldiv'> 
          <Oval className='oval' />
        </div>
       : 
        
        <div className='div-container' >
        { episodes.length > 0 && <h1 className='htitle'  >{currentCharData.name}: All episodes</h1>}
          { showEps}
          <div className='divlink'>
            <button className='linkChar' onClick={()=> navigate("/") }> Go Home </button>
            <button className='linkChar' onClick={()=> navigate("/characters/" + currentCharData.id) }>  Go Back </button>
          </div>
        </div>

      
      }
    </>
  );
      }
