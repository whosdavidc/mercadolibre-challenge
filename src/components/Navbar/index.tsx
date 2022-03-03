import React from 'react';
import SearchBox from './../Searchbox/index';
import logo from "../../images/logo.png"; 
import personIcon from "./../../images/personIcon.png";
import arrowIcon from "./../../images/arrow.png";
import image from "./../../images/envio.jpg";
import logoUbication from "./../../images/ubicacion.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} id="logo"/>
                <div className="ubication-logo">
                    <img src={logoUbication} className="ubication-image"/>
                    <div className='ubication-text'>
                        <p>Enviar a Pepito</p>
                        <p>O’Higgins 2355</p>
                    </div>
                </div>
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
                            <p>Pepito</p> 
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