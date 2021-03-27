import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import checkError from '../../My-tools/My-tools';
import axios from 'axios';

const Login = () => {

    let history = useHistory();

            const [user,setUser]=useState({ email:'',password:'' })
            const [messaje,setMessage] = useState('')

            const handler = (e) => {
                setUser({...user, [e.target.name]:e.target.value});
            };
        
            

            const sendData = async ()=>{
                  
                setMessage('');

              let notValidated = checkError(user)
              setMessage(notValidated);

               if(notValidated){
               return;
               }
                 let userData ={
                 email : user.email,
                 password :user.password
                }
                 
                let response = await axios.post('http://localhost:3002/users/login',userData)
                if(response){
                   localStorage.setItem('credentials',response.data.jwt.user)
                   
                   console.log(response.data.jwt.user)

                   history.push('/profile');
                }else{alert('Usuario No Encontrado')}
            }
            return (
        <div className="form">
            
            <div className="form-logo">
                <div className="form-logo-first">Net </div>
                <div className="form-logo-second"> Film</div>
            </div>
            <div className="form-content">
                <div className="form-content-title">Bienvenido de vuelta</div>
                <div className="form-content-inputs">
                    <p className='form-label'>Email</p>
                    <input onChange={handler}  name='email' className="form-input form-input-email"></input>
                    <div className="form-password">
                        <p className='form-label form-label-password'>Contraseña</p>
                        <p className='form-label-error'>¿Has olvidado tu contraseña?</p>
                    </div>
                    <input onChange={handler} name='password' className="form-input form-input-password"></input>
                    <FontAwesomeIcon icon={faEye} className='form-input-password-eye' />
                    <div onClick={()=>{sendData()}} className="form-button">
                        Iniciar Sesión
                            </div>
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

export default Login;