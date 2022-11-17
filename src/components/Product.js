//import Product from "../container/Products"
//import { useState } from "react";
const Product = (props) =>{
  /*   const [rate, setRate] = useState(0);
    const rateProd = () =>{
        setRate(rate + 1)
        console.log(rate); */
    
    return (
        <div className="product-container">
            <div className="product-image">
                <img src={props.image} alt="product"/>
            </div>
            <div className="product-info">
                <h2>{props.title}</h2>
                <div className="info">
                <h3>{props.price}</h3>
                <p>ver detalles</p>
                </div>
                <div className="btn-item">
                <button className="btn-buy">buy</button>
                </div>
            </div>
        </div>
    )
    }

export default Product;