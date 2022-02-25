import React from 'react'
import trophyIcon from "./../../images/trofeo.png";
import Button from "./../Button/index";
import Box from "./../Box/index";
import PaymentInfo from "./../PaymentInfo/index";
import ShippingDetails from "./../ShippingDetails";
import "./generalData.css";

const GeneralData = () => {
    return (
        <div className="general-data">
            <div className="info-product">
                <h2 className="product-title">De Qué Hablamos Cuando Hablamos De Amor - Carver - Anagrama</h2>
                <PaymentInfo/>
                <ShippingDetails/>
                <p className="availability">¡Ultima disponible!</p>
                <div className="buy-button">
                    <Button text="Comprar ahora"/>
                </div>
                <div className="add-to-cart-button">
                    <Button text="Agregar al carrito"/>
                </div>
                <Box/>
                <Box/>
                <div className="reward-points">
                    <img src={trophyIcon}/>
                    <p><p className="blue-little-font">Mercado Puntos</p>Sumás 10 puntos.</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralData