import React from 'react';
import Movie from '../../components/Movie/Movie'
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './Carrousel.scss'

const Carrousel =()=>{


    const [latest,setLatest]= useState([])
 


    useEffect(()=>{
    
    let Latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";
    
    
      fetch(Latest)
      .then(res =>(res.json()))
      .then(data =>{
         console.log(data)
         setLatest(data.results)
      })
    
      
    
    },[]);
    
    //Functions:
    
       let history = useHistory();
       
       const takeMeTo =(latest)=>{
         
          localStorage.setItem('latest',JSON.stringify(latest))
       
           setTimeout(()=>{history.push('/movieProfile')},500)
         
    
       }


const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


   return(
       <div>
            <div class="peliculas-recomendadas contenedor">
			    <div class="contenedor-titulo-controles">
				<h3>Películas Recomendadas</h3>
				<div class="indicadores"></div>
			    </div>

			         <div class="contenedor-principal">
				        <button role="button" id="flecha-izquierda" class="flecha-izquierda"><i class="fas fa-angle-left"></i></button>

				       <div class="contenedor-carousel">
					      <div class="carousel">
						     <div className="pelicula">
                             {latest.map(latest=> <Movie key={latest.id} {...latest} onClick={()=>takeMeTo(latest)}/>)}
                             </div>
					      </div>
				       </div>

				<button role="button" id="flecha-derecha" class="flecha-derecha"><i class="fas fa-angle-right"></i></button>
			</div>
		</div>
       </div>
   )


}

export default Carrousel;