import React, { useEffect,useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import './Home.scss';



const Home = (props)=>{

    const [latest,setLatest]= useState([])
    const [populares,setPopulares]= useState([])
    const [recomendaciones,setRecomendaciones]= useState([])

    useEffect(()=>{

        //Ultimas Peliculas
    
    let Latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";

    let populares='https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1';

    let recomendaciones='https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1'


    
      fetch(populares)
      .then(res =>(res.json()))
      .then(data =>{
         console.log(data)
         setLatest(data.results)
      })

      //Populares
    
      
    
    
      fetch(Latest)
      .then(res =>(res.json()))
      .then(data =>{
         console.log(data)
         setPopulares(data.results)
      })

      //Recomendaciones

      
    
      fetch(recomendaciones)
      .then(res =>(res.json()))
      .then(data =>{
         console.log(data)
         setRecomendaciones(data.results)
      })
    
    
      
    
    },[]);
    
    //Functions:
    
       let history = useHistory();
       
       const takeMeTo =(latest)=>{
         
          localStorage.setItem('latest',JSON.stringify(latest))
       
           setTimeout(()=>{history.push('/movieProfile')},500)
         
    
       }
    




     return(
         
        
        <div>

        < Header style='style1'/>
           <div className="Contenedor">
            
              <div className="trailer" >
              <video className='video' id='video' src={video} controls autoplay></video>

              </div>

              <h1 className='h1'>Ultimas Peliculas Añadidas</h1>

              <div className="ultimas">
              {latest.map(latest=> <Movie key={latest.id} {...latest} onClick={()=>takeMeTo(latest)}/>)}
              </div>

              <h1 className='h1'>Populares</h1>
    
              <div className="populares">
              {populares.map(populares=> <Movie key={populares.id} {...populares} onClick={()=>takeMeTo(populares)}/>)}
              </div>

              <h1 className='h1'>Recomendaciones</h1>

              <div className="relacionadas">
              {recomendaciones.map(recomendaciones=> <Movie key={recomendaciones.id} {...recomendaciones} onClick={()=>takeMeTo(recomendaciones)}/>)}
              </div>
         
           </div> 
           
        </div>    
    )
    
}




export default Home;