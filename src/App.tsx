import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import book from "./images/book.jpg";
import ImageSlider from './components/ImageSlider';
import truckIcon from "./images/van.png";
import marketIcon from "./images/market.png";
import trophyIcon from "./images/trofeo.png";
import Product from './components/Product';
type MyType = { title: string, text: string };
let article: MyType = {} as MyType;


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-container">
        <div className="product-container">
          <div className="the-product">
            <div className="product">
              <ImageSlider/>
            </div>

            <div className="publications">
              <p className="publications-title">Publicaciones del vendedor</p>
              <div className="publications-products">
                <Product/>
                <Product/>
                <Product/>
              </div>
              <div className="seller-pubs">
              <p>Ver más publicaciones del vendedor</p>
            </div>


            <div className="features-box">
              <p>Características principales</p>
              <div className="features">
                <div>
                  <div>Marca</div><div>Misionlive</div>
                </div>
                <div>
                  <div>Modelo</div><div>Pato Bailarin</div>
                </div>
              </div>
              <p>Otras caracteristicas</p>
              <p>kakakakkakak</p>
              <p>kakakakkakak</p>
              <p>kakakakkakak</p>
              <p>kakakakkakak</p>
            </div>

            <div className="description">

            </div>

            <div className="FAQS"></div>
          </div>
          
          </div>
          <div className="general-data">
            <div className="info-product">
              <h2 className="product-title">De Qué Hablamos Cuando Hablamos De Amor - Carver - Anagrama</h2>
              <div className="payment-info">
                <p className="product-price">$1.095</p>
                <p>en 12x de $162,64 pagando con Mercado Crédito</p>
                <p className="ways-to-pay blue-little-font">Ver los medios de pago</p>
              </div>
              <div className="shipping-ways">
                <div className="ship-price m-top-1">
                  <img src={truckIcon}/>
                  <p>Llega hoy por $379</p>
                </div>
                  <p className="blue-little-font margin-left-15">Ver más formas de entrega</p>
                <div className="get-in-market m-top-1">
                  <img src={marketIcon}/>
                  <p>Retirá a partir del martes en correos y otros puntos por $559,99</p>
                </div>
                  <p className="blue-little-font margin-left-15">Ver en el mapa</p>
              </div>

              <p className="availability">¡Ultima disponible!</p>
              <div className="buy-button">
                <Button text="Comprar ahora"/>
              </div>
              <div className="add-to-cart-button">
                <Button text="Agregar al carrito"/>   
              </div>
              <div className="box"></div>
              <div className="box"></div>
              
              <div className="reward-points">
                <img src={trophyIcon}/>
                <p><p className="blue-little-font">Mercado Puntos</p>. Sumás 10 puntos.</p>
              </div>
            </div>
          
            <div className="about-seller">
              <p>Información sobre el vendedor</p>
              
              <div>
                <p>Ubicación</p>
                <p>Balvanera, Capital Federal</p>
              </div>
              
              <div>
                MercadoLíder Platinum
              </div>

              ¡Es uno de los mejores del sitio!
            </div>

            <div className="warranty">
              <p>Garantía</p>
              <p>Garantía del vendedor</p>
              <p>Garantía del vendedor: 30 días</p>
              <hr/>
              <p>Medios de pago</p>
              <div>
                <p>Hasta 12 cuotas sin tarjeta</p>
                <p>Tarjetas de crédito</p>
              </div>
              <div>
                <p>¡Cuotas sin interés con bancos seleccionados!</p>
              </div>

              <div>
                Tarjetas de Débito
              </div>

              <div>
                Efectivo
              </div>
              <p>Conocé medios de pagos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  export default App;
