import { useState } from 'react'

const CartItemCard = ({ name, price, quantity, img, productID, removeFromCart, handleQuantityChange }) => {
    const [quantityState, setQuantityState] = useState(quantity)
    const [quantityChange, setQuantityChange] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const handleChange = event => {
        setQuantityState(event.target.value)
        setQuantityChange(true)
    }

    const changeQuantity = () => {
        handleQuantityChange(productID, quantityState)
        setQuantityChange(false)
    }

    if(!deleted) {
        return (
            <div className="cart-card">
                <img src={img} alt="whiskey bottle" />
                <div>
                    <h4>{name}</h4>
                    <span>${price}</span>
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
                            <button onClick={() => changeQuantity(productID, quantityState)}>Save</button>
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