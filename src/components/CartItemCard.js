import { useState, useEffect } from 'react'
import axios from 'axios'

const CartItemCard = ({ name, price, quantity, img, productID, removeFromCart }) => {
    const [quantityState, setQuantityState] = useState(quantity)
    const [quantityChange, setQuantityChange] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const handleChange = event => {
        setQuantityState(event.target.value)
        setQuantityChange(true)
    }

    const handleQuantityChange = event => {
        const data = {productID: productID, quantity: quantityState}

        axios({
            data: data,
            method: 'put',
            url: 'http://localhost:5000/cart',
            withCredentials: true
        })
            .then(res => {
                setQuantityChange(false)
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

    if(!deleted) {
        return (
            <div className="cart-card">
                <img src={img} alt="whiskey bottle" />
                <div>
                    <h4>{name}</h4>
                    <span>{price}</span>
                </div>
                <div className="cart-card-info">
                    <span>Total: ${(price * quantityState).toFixed(2)}</span>
                    <input
                        type="number"
                        min="1"
                        max="99"
                        name="quantity"
                        value={quantityState}
                        onChange={handleChange}
                    />
                    {
                        quantityChange ? (
                            <button onClick={handleQuantityChange}>Save</button>
                        ) : (
                            <button onClick={() => removeFromCart(productID)}>Remove</button>
                        )
                    }
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default CartItemCard