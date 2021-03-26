import React from 'react';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    return (
        <div id='content'>
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
                            <p className='form-label form-label-register form-label-name'>Nombre</p>
                            <input className="form-input form-input-register form-input-name"></input>
                            <p className='form-label form-label-register form-label-first-surname'>Primer Apellido</p>
                            <input className="form-input form-input-register form-input-first-surname"></input>
                            <p className='form-label form-label-register form-label-second-surname'>Segundo Apellido</p>
                            <input className="form-input form-input-register form-input-second-surname"></input>
                            <div className="city">
                                <div className="city-options city-country">
                                    <p className='form-label form-label-register form-label-country'>Pais</p>
                                    <input className="form-input form-input-city form-input-country"></input>
                                </div>
                                <div className="city-options city-city">
                                    <p className='form-label form-label-register form-label-city'>Ciudad</p>
                                    <input className="form-input form-input-city form-input-city"></input>
                                </div>
                                <div className="city-options city-cp">
                                    <p className='form-label form-label-register form-label-cp'>CP</p>
                                    <input className="form-input form-input-city form-input-cp"></input>
                                </div>
                                
                            </div>
                            <p className='form-label form-label-register '>Email</p>
                            <input className="form-input form-input-register form-input-email"></input>
                            <div className="form-password form-password-register">
                                <p className='form-label form-label-register form-label-password'>Contraseña</p>
                                <p className='form-label-error'></p>
                            </div>
                            <input className="form-input form-input-register form-input-password"></input>
                            <div className="form-button form-button-register">
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
};

export default Register;