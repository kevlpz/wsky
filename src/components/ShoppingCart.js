import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItemCard from './CartItemCard'
import { Redirect } from 'react-router-dom'

const ShoppingCart = ({ user }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/cart',
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                setCartItems(res.data)
            })
            .catch(err => console.log('err: ', err))
    }, [])

        return (
            <div className="shopping-cart-container">
                {
                    cartItems.map(({ name, price, quantity, img }) => {
                        return <CartItemCard
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