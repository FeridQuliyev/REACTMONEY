import React from 'react'
import "../BasketItem/BasketItem.css"
function BasketItem({item,product}) {
    return (
        <div className='price'>
            {product.title} x {item.amount}
        </div>
    )
}

export default BasketItem