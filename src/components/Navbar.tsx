import React from 'react';
import SearchBox from './SearchBox';
import {Image} from "@chakra-ui/react";
/** import Logo from '../images/logo.png'; */
import logo from "../images/logo.png"; 
import personIcon from "../images/personIcon.png";
import arrowIcon from "../images/arrow.png";
import image from "../images/envio.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="ubication">
                <img src={logo}/>
                <p>Ubi, Dragones 2486</p>
            </div>
            <div className="nav-sections">
                <div className="nav-search">
                    <SearchBox/>    
                    <div className="menu-1">
                        <p>Categorias</p>
                        <p>Ofertas</p>
                        <p>Historial</p>
                        <p>Supermercado</p>
                        <p>Moda</p>
                        <p>Vender</p>
                        <p>Ayuda</p>
                    </div>
                </div>
                <div className="menu-2">
                    <img className="image" src={image}/>
                    <div className="options-menu-2">
                        <div className="name">
                            <img className="personIcon"src={personIcon}/>
                            <p>David</p> 
                            <img src={arrowIcon} className="arrow"/>
                        </div>
                        <div className="shopping">
                            <p>Mis</p>
                            <p>compras</p>
                        </div>
                        <div className="favs">
                            <p>Favoritos</p>
                            <img src={arrowIcon} className="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;