import React from 'react';


import {useHistory} from 'react-router-dom';

const Header = (props)=>{
    let history=useHistory();
 

    

        return(
              
        <div className="vistaHeader">

            <div className="logo" onClick={()=>history.push('/')}>Rakuten TGJ</div>
              <div className="nav">
                <div className="inicio" onClick={()=>history.push('/')}>Inicio</div>
                <div className="Peliculas" onClick={()=> history.push('/peliculas')}>Peliculas</div>
                <div className="Series" onClick={()=> history.push('/series')}> Series</div>
                <input className="search" type="text" placeholder=" Busqueda..."/>
                <div className="userName" onClick={()=> history.push('./login')}>Bienvenido UsR</div>
               </div>
              
        </div>
        )
    

}
export default Header;