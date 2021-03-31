// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import HeaderUser from '../Header-user/Header-user';

const Data = () => {

    return (
        <div className='component-profile'>
            <HeaderUser />
            <div className="data-user">
                <div className="form-update-data">
                    <div className="form-data-content">
                        <p className='form-data-content-title'>Actualizar datos</p>
                        <label htmlFor="" className='form-update-data-label'>Nombre</label>
                        <input type="name" className='form-update-data-input'/>
                        <label htmlFor="" className='form-update-data-label'>Apellidos</label>
                        <input type="surname" className='form-update-data-input'/>
                        <label htmlFor="" className='form-update-data-label'>Fecha de nacimiento</label>
                        <input type="date" step="1" min="1930-12" max="2006-12" className='form-update-data-input'/>
                        <label htmlFor="" className='form-update-data-label'>Telefono</label>
                        <input type="phone" className='form-update-data-input'/>
                        <label htmlFor="" className='form-update-data-label'>Email</label>
                        <input type="email" className='form-update-data-input'/>
                        <label htmlFor="" className='form-update-data-label'>Dirección</label>
                        <input type="address" className='form-update-data-input'/>
                        <div className="country-city-cp">
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>País</label>
                                <input type="country" className='form-update-data-input'/>
                            </div>
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>Provincia</label>
                                <input type="city" className='form-update-data-input'/>
                            </div>
                            <div className="country-city-cp-style">
                                <label htmlFor="" className='form-update-data-label'>CP</label>
                                <input type="cp" className='form-update-data-input'/>
                            </div>
                        </div>
                        <input type="button" value="Actualizar datos" className='form-update-data-button'/>
                    </div>
                </div>
                <div className="form-update-payment">
                    <div className="form-payment-content">
                        <div className="form-update-payment-title">
                            <p className='form-payment-content-title'>Actualizar información de pago</p>
                            <div className="form-update-payment-img"></div>
                        </div>
                        <div className="principal-data">
                            <label htmlFor="" className='form-update-payment-label'>Nombre</label>
                            <input type="name" className='form-update-payment-input'/>
                            <label htmlFor="" className='form-update-payment-label'>Número de tarjeta</label>
                            <input type="numberCard" className='form-update-payment-input'/>
                        </div>
                        <div className="security">
                            <div className="security-date">
                                <label htmlFor="" className='form-update-security-label'>Fecha de vencimiento</label>
                                <input type="month" name="month" step="1" min="2021-04" max="2026-12"  className='form-update-security-input input-date'/>
                            </div>
                            <div className="security-code">
                                <label htmlFor="" className='form-update-security-label'>Código de seguridad</label>
                                <input type="security-code" name='security-code' max='4' className='form-update-security-input'/>
                            </div>
                        </div>
                        <input type="button" value="Actualizar metodo de pagó" className='form-update-payment-button'/>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Data;