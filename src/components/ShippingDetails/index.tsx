import React from 'react';
import "./ShippingDetails.css";
import truckIcon from "./../../images/van.png";
import marketIcon from "./../../images/market.png";
import "./../../App.css";
const index = () => {
    return (
        <div className="shipping-ways">
            <div className="ship-price m-top-1">
                <img src={truckIcon}/>
                <p className='arrive'><p className='green-font llega-hoy'>Llega hoy</p>por $379</p>       
            </div>
            <p className="blue-little-font margin-left-15">Ver más formas de entrega</p>
            <div className="get-in-market m-top-1">
                <img src={marketIcon}/>
                <p>Retirá a partir del martes en correos y otros puntos por $559,99</p>
            </div>
            <p className="blue-little-font margin-left-15">Ver en el mapa</p>
        </div>
    )
}

export default index