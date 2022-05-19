import './App.css';
import Header from './components/Header/Header';
import Product from "./components/Product/Product"
import products from "./products.json"
import Basket from "./components/Basket/Basket"
import { useState, useEffect } from "react"
function App() {
  const [money, setMoney] = useState(2000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [basket])

  return (
    <div className="App">
      <Header total={total} money={money} />
      {products.map(product => (
        <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
      ))}
     {total > 0 &&(
         <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
     )}
    </div>
  );
}

export default App;
