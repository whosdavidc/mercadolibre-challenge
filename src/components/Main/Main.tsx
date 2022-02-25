import React from 'react'
import ProductContainer from "../ProductContainer/index";
import Publicity from '../Publicity';
import "./main.css"
type MyType = { title: string, text: string };
let article: MyType = {} as MyType;


const Main = () => {
  return (
    <div className="main-container">
      <ProductContainer/>
      <Publicity/>
    </div>
  )
}

export default Main