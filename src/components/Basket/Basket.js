import React from 'react'
import BasketItem from '../BasketItem/BasketItem'

function Basket({ basket,resetBasket, total, products }) {
    return (
        <>
            {
                basket.map(item => (
                    <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                ))}
            <div>
                Total: ${total}
            </div>
            <button onClick={resetBasket}>Sepeti sifirla</button>
        </>
    )
}

export default Basket