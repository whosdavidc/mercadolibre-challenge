import React from 'react';
import ProductImage from "./../../images/book.jpg";
import ProductImage2 from "./../../images/book2.jpg";
import ProductImage3 from "./../../images/book3.jpg";
import SliderImage from 'react-zoom-slider';
import "./ImageSlider.css";
const data = [
    {
        image: ProductImage,
        text: "IMG1"
    },    
    {
        image: ProductImage2,
        text: "IMG1"
    },   
    {
        image: ProductImage3,
        text: "IMG1"
    }
]


const ImageSlider = () => {
    return (
        <div className="image-slider">
            <div className="product-images">
                <SliderImage 
                    data={data} 
                    width="100%" 
                    showDescription={false} 
                    direction="right"
                />
            </div>
        </div>
    )};

export default ImageSlider;
