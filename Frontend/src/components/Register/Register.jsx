
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import checkError from '../../My-tools/My-tools';

                     // Starting..................//TAREK//

const Register = (props) => {
        

    let history = useHistory();
    
      const [user, setUser] = useState({

        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        adress: "",
        payment: "",
      

      });
    
      const [message, setMessage] = useState('');
     
     
    
      // Manejar el estado

      const handleState = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    };

  
    
      // Envio de datos del registro
    
      const sendData = async () => {

         // Check for erros---------------------//

         setMessage('');

        let notValidated = checkError(user)
        setMessage(notValidated);

        if(notValidated){
            return;
        }

         let userData = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            phone: 555555555,
            birthday: 'campo a rellenar',
            adress: user.adress,
            payment:user.payment,
           
          };
              console.log(userData);
   
            let endpointUser = 'http://localhost:3002/users';
          
         let response = setTimeout(async ()=>{

            await axios.post(endpointUser,userData); 

            console.log(response)
        },1000) 
         if(response){
         
          alert('Usuario Registrado Con Exito')
          setTimeout(() => {
            history.push('/')  
          }, 1000);
          
         }else{
             alert('Lo siento , no se pudo completar el registro, vuelve a intentarlo mas tarde')
         }
     
      };
    
      
    
     
    
    return (
        <div id='content'>
           {/*<pre>{JSON.stringify(user, null, 2) }</pre>*/}
            <div className="content-left"></div>
            <div className="content-right">
                <div className="form">
                    <div className="form-logo">
                        <div className="form-logo-first">Net </div> 
                        <div className="form-logo-second"> Film</div>
                    </div>
                    <div className="form-content form-content-register">
                        <div className="form-content-title form-content-title-register">Bienvenido</div>
                        <div className="form-content-inputs form-content-inputs-register">
                            <p className='form-label form-label-register form-label-name' onChange={handleState}>Nombre</p>
                            <input name= 'name' className="form-input form-input-register form-input-name" onChange={handleState}></input>
                            {message}
                            <p className='form-label form-label-register form-label-first-surname'>Apellidos</p>
                            <input name= 'surname' className="form-input form-input-register form-input-first-surname" onChange={handleState}></input>
                            {message}
                            <p className='form-label form-label-register form-label-second-surname'>Direccíon</p>
                            <input name= 'adress' className="form-input form-input-register form-input-second-surname" onChange={handleState}></input>
                            <div className="city">
                                <div className="city-options city-country">
                                    <p className='form-label form-label-register form-label-country'>Pais</p>
                                    <input className="form-input form-input-city form-input-country" onChange={handleState}></input>
                                </div>
                                <div className="city-options city-city">
                                    <p className='form-label form-label-register form-label-city'>Ciudad</p>
                                    <input className="form-input form-input-city form-input-city" onChange={handleState}></input>
                                </div>
                                <div className="city-options city-cp">
                                    <p className='form-label form-label-register form-label-cp'>CP</p>
                                    <input className="form-input form-input-city form-input-cp" onChange={handleState}></input>
                                </div>
                                
                            </div>
                            <p className='form-label form-label-register '>Email</p>
                            <input  name='email' className="form-input form-input-register form-input-email" onChange={handleState}></input>
                            <div className="form-password form-password-register">
                                <p className='form-label form-label-register form-label-password' >Contraseña</p>
                                <p className='form-label-error'></p>
                            </div>
                            <input  type='password' name='password' className="form-input form-input-register form-input-password" onChange={handleState}></input>
                            <div onClick={()=>{sendData()}}className="form-button form-button-register">
                                Registrarse
                            </div>
                        </div>
                        <div className="form-content-options form-content-options-register">
                            <p className='form-content-options-label form-content-options-label-register'>o Registrate con</p>
                            <div className="buttons-login">
                                <div className="button-login button-login-google">
                                    <FontAwesomeIcon icon={faGoogle} className='button-login-icon'/>
                                    <em className='button-login-letter'>Google</em>
                                </div>
                                <div className="button-login button-login-facebook">
                                    <FontAwesomeIcon icon={faFacebookF} className='button-login-icon'/>
                                    <em className='button-login-letter'>Facebook</em>
                                </div>
                            </div>
                            <div className="form-content-register form-content-register-change">
                                <p className='register-question'>¿Ya tiene una cuenta? </p>
                                <p className='register'><a href="/" className='register-link'> Ingresa ahora</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register