// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import HeaderUser from '../Header-user/Header-user';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import checkError from '../../../My-tools/My-tools';
import { connect } from 'react-redux';
import {UPDATE_USER} from '../../../redux/types/userTypes';

const Data = (props) => {

    let history = useHistory();

    const [user, setUser] = useState(props.user);
    const [message, setMessageUpdateData] = useState('');
    const [messagePayment, setMessagePayment] = useState('');

    if(!props.token){
        history.push('/');
        return null;
    };

    // Manejar el estado
    const handleState = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    const handleStatePayment = (e) => {
        setUser({ ...user, payment:{...user.payment, [e.target.name]: e.target.value }});
    };

    // Actualizando datos del registro
    const updateData = async () => {

        // Check for erros---------------------//
        setMessagePayment('');

        let notValidated = checkError(user.payment)
        setMessagePayment(notValidated);

        if (notValidated) {
            alert('no puede actualizar payment');
            return;
        }

        // Check for erros---------------------//
        setMessageUpdateData('');

        notValidated = checkError(user)
        setMessageUpdateData(notValidated);

        if (notValidated) {
            console.log(user)
            alert('no puede actualizar data');
            return;
        }
        
        console.log(user);

        let endpointUser = `http://localhost:3002/users/${user._id}`;
        let response = await axios.put(endpointUser, user, { headers: { authorization: props.token } });
    
        console.log(response);
        
        if (response) {
            props.dispatch({type: UPDATE_USER, payload: user});
            alert('Datos actualizados con Exito');
        } else {
            alert('Lo siento , no se pudo actualizar el registro, vuelve a intentarlo mas tarde');
        }
    };

    return (
        <div className='component-profile'>
            <HeaderUser />
            <div className="data-user">
                <div className="form-update-data">
                    <div className="form-data-content">
                        <p className='form-data-content-title'>Actualizar datos</p>
                        <label htmlFor="" className='form-update-data-label'>Nombre</label>
                        <input type="name" name="name" className='form-update-data-input' value={user.name} onChange={handleState}/>
                        <label htmlFor="" className='form-update-data-label'>Apellidos</label>
                        <input type="surname" name="surname" className='form-update-data-input' value={user.surname} onChange={handleState}/>
                        <label htmlFor="" className='form-update-data-label'>Fecha de nacimiento</label>
                        <input type="date" name="birthday"  step="1" min="1930-12" max="2006-12" className='form-update-data-input' value={user.birthday} onChange={handleState}/>
                        <label htmlFor="" className='form-update-data-label'>Telefono</label>
                        <input type="phone" name="phone" className='form-update-data-input' value={user.phone} onChange={handleState}/>
                        <label htmlFor="" className='form-update-data-label'>Email</label>
                        <input type="email" name="email" className='form-update-data-input' value={user.email} onChange={handleState}/>
                        <label htmlFor="" className='form-update-data-label'>Dirección</label>
                        <input type="address" name="address" className='form-update-data-input' value={user.address} onChange={handleState}/>
                        <div className="country-city-cp">
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>País</label>
                                <input type="country" name="country" className='form-update-data-input'  value={user.country} onChange={handleState}/>
                            </div>
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>Provincia</label>
                                <input type="city" name="city" className='form-update-data-input' value={user.city} onChange={handleState}/>
                            </div>
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>CP</label>
                                <input type="cp" name="postal" className='form-update-data-input' value={user.postal} onChange={handleState}/>
                            </div>
                        </div>
                        {message}
                        <input type="button" value="Actualizar datos" className='form-update-data-button' onClick={updateData}/>
                    </div>
                </div>
                <div className="form-update-payment">
                    <div className="form-payment-content">
                        <div className="form-update-payment-title">
                            <p className='form-payment-content-title'>Actualizar información de pago</p>
                            {messagePayment}
                            <div className="form-update-payment-img"></div>
                        </div>
                        <div className="principal-data">
                            <label htmlFor="" className='form-update-payment-label'>Nombre</label>
                            <input type="name" name="nameUser" className='form-update-payment-input' value={user.payment?.nameUser} onChange={handleStatePayment}/>
                            <label htmlFor="" className='form-update-payment-label'>Número de tarjeta</label>
                            <input type="numberCard" name="numberCard" className='form-update-payment-input' value={user.payment?.numberCard} onChange={handleStatePayment}/>
                        </div>
                        <div className="security">
                            <div className="security-date">
                                <label htmlFor="" className='form-update-security-label'>Fecha de vencimiento</label>
                                <input type="month" name="date" step="1" min="2021-04" max="2026-12" className='form-update-security-input input-date' value={user.payment?.date} onChange={handleStatePayment}/>
                            </div>
                            <div className="security-code">
                                <label htmlFor="" className='form-update-security-label'>Código de seguridad</label>
                                <input type="security-code" name="codeSecurity" max="4" className="form-update-security-input" value={user.payment?.codeSecurity} onChange={handleStatePayment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps =state =>{
    return{
      user : state.user,
      token : state.token
    }
  };
export default connect(mapStateToProps)(Data);
