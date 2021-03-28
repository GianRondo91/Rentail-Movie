import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import checkError from '../../My-tools/My-tools';
import {connect} from 'react-redux';
import axios from 'axios';
import {LOGIN,LOGOUT,UPDATE_USER} from '../../redux/types';
import { layer } from '@fortawesome/fontawesome-svg-core';

const Login = (props) => {

    let history = useHistory();

    let type = 'text';  

              const eye =()=>{
                
                 type ='password';
              }
         

            const [credentials,setCredentials]=useState({ email:'',password:'' })
            const [messaje,setMessage] = useState('')

            const handler = (e) => {
                setCredentials({...credentials, [e.target.name]:e.target.value});
            };
        
            

            const sendData = async ()=>{
                  
                setMessage('');

              let notValidated = checkError(credentials)
              setMessage(notValidated);

               if(notValidated){
               return;
               }
                 let credentialsData ={
                 email : credentials.email,
                 password :credentials.password
                }
                 
                let response = await axios.post('http://localhost:3002/users/login',credentialsData)
               
              if(response.status == 200){
                  console.log(response)
                  localStorage.setItem('token',response.data.jwt.jwt)
                  localStorage.setItem('user',JSON.stringify(response.data.jwt.user))
                  let token = localStorage.getItem('token');
                  let user =JSON.parse(localStorage.getItem('user'))
                  console.log(user)
                  console.log(token)
                  props.dispatch({type:LOGIN,payload:response.data});
                  setTimeout(() => {
                  history.push('/home')    
                  }, 1000);
                  


              }else {
                 // setMessage('')
                  alert('Sus credenciales son erroneos, comprueba su email o contraseña')
              }
            }

            return (
        <div className="form">
            
            <div className="form-logo">
                <div className="form-logo-first">Net </div>
                <div className="form-logo-second"> Film</div>
            </div>
            <div className="form-content">
                <div onClick={eye} className="form-content-title">Bienvenido de vuelta</div>
                <div className="form-content-inputs">
                    <p className='form-label'>Email</p>
                    <input type ='' onChange={handler}  name='email' className="form-input form-input-email"></input>
                    
                    <div className="form-password">
                        <p className='form-label form-label-password'>Contraseña</p>
                        <p className='form-label-error'>¿Has olvidado tu contraseña?</p>
                    </div>
                    <input type = 'password'  onChange={handler} name='password' className="form-input form-input-password"></input>
                  
                    <FontAwesomeIcon icon={faEye} className='form-input-password-eye' />
                    <div onClick={()=>{sendData()}} className="form-button">
                        Iniciar Sesión
                            </div>
                            <div className="message">{messaje}</div>
                </div>
                <div className="form-content-options">
                    <p className='form-content-options-label'>o inicia sesión con</p>
                    <div className="buttons-login">
                        <div className="button-login button-login-google">
                            <FontAwesomeIcon icon={faGoogle} className='button-login-icon' />
                            <em className='button-login-letter'>Google</em>
                        </div>
                        <div className="button-login button-login-facebook">
                            <FontAwesomeIcon icon={faFacebookF} className='button-login-icon' />
                            <em className='button-login-letter'>Facebook</em>
                        </div>
                    </div>
                    <div className="form-content-register">
                        <p className='register-question'>¿Todavia no tienes una cuenta? </p>
                        <p className='register'><a href="/register" className='register-link'> Crea una ahora</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
    }
}

export default connect(mapStateToProps)(Login);