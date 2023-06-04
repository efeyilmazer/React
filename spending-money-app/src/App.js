import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import products from './Products.json'

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([])

  useEffect(() => {
    console.log(basket)
  },[basket])


  return (
    <>
        <Header money = {money}/>
        {products.map(product => (
    <Product basket={basket} setBasket={setBasket} product={product}/>
    ))}

    </>
  );
}

export default App;
