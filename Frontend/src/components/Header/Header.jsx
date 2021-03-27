import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';


import {useHistory} from 'react-router-dom';

const Header = (props)=>{

    let history=useHistory();
       let user =JSON.parse(localStorage.getItem('user'))
       //let user =props.user;
       //console.log(credentials)
       console.log(user.name)
       console.log(user.phone)

       const logout =()=>{
         let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?')
         if(confirmar){
           setTimeout(() => {
             localStorage.removeItem('user');
             history.push('/')
           }, 1000);
          }
       }
    
       
        return(
           
         <div className="vistaHeader">
           
            <div className="logo" onClick={()=>history.push('/')}>Rakuten TGJ</div>
              <div className="nav">
                <div className="inicio" onClick={()=>history.push('/')}>Mi Colección</div>
                <div className="Peliculas" onClick={()=> history.push('/peliculas')}>Peliculas</div>
                <div className="Series" onClick={()=> history.push('/series')}> Series</div>
                <input className="search" type="text" placeholder=" Busqueda..."/>
                <div className="userName" onClick={()=> logout()}>{user.name}</div>
               </div>
              
        </div>
        
        )
    

}
export default Header;