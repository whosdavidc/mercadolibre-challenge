import React from 'react';
import image from "./../../images/book.jpg";
import "./Product.css";

const Product = () => {
  return <div className="unit-product">
      <img src={image}/>
      <p className='unit-product-price'>$1250</p>
      <p className='unit-product-title'>De Qué Hablamos Cuando Hablamos De Amor - Carver - Anagrama</p>
  </div>;
};

export default Product;
