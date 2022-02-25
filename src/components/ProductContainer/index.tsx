import React from 'react'
import GeneralData from '../GeneralData';
import ImageSlider from '../ImageSlider/index';
import Publications from '../Publications';
import "./ProductContainer.css"

const index = () => {
    return (
        <div className="product-container">
            <div className="the-product">
                <div className="product">
                    <ImageSlider/>
                </div>
                <Publications/>
            </div>
            <GeneralData/>
        </div>
            )
}

export default index