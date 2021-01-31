import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItemCard from './CartItemCard'

const ShoppingCart = ({ user }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/cart',
            withCredentials: true
        })
            .then(res => {
                setCartItems(res.data)
            })
            .catch(err => console.log('err: ', err))
    }, [])

        return (
            <div className="shopping-cart-container">
                {
                    cartItems.map(({ name, price, quantity, img, itemID }) => {
                        return <CartItemCard
                            key={itemID}
                            id={itemID}
                            name={name}
                            price={price}
                            quantity={quantity}
                            img={img}
                        />
                    })
                }
            </div>
        )
}

export default ShoppingCart