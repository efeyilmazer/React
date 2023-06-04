import { useState } from "react";


function Product({product, basket, setBasket}) {
    
    const addBasket = () => {
        setBasket([...basket, product])
      }

    return(
        <>
        <div className="product">
            <h3>{product.title}</h3>
            <button>Sat</button>
            <span>0</span>
            <button onClick={addBasket}>Satın al</button>
            <style jsx>{
                `
                .product {
                    padding: 20px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 15px;
                }
                `
            }

            </style>
        </div>
        
        </>
    )
}

export default Product;