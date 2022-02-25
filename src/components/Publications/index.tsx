import React from 'react';
import CommentSection from '../CommentSection';
import Product from '../Product';
import Description from '../Description';

const Publications = () => {
    return (
        <div className="publications">
            <h1 className="publications-title">Publicaciones del vendedor</h1>
            <div className="publications-products">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="seller-pubs">
                <p className='blue-little-font text-left'>Ver más publicaciones del vendedor</p>
            </div>
            <Description/>
            <CommentSection/>
        </div>
    )
}

export default Publications