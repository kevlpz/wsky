import CartItemCard from './CartItemCard'
import { Redirect } from 'react-router-dom'

const ShoppingCart = ({ cartItems, cartTotal, removeFromCart, handleQuantityChange, isLoggedIn }) => {
        isLoggedIn ? (
            <>
                <div className="shopping-cart-container">
                    {
                        cartItems.length ? (
                            cartItems.map(({ name, price, quantity, img, productID }, i) => {
                                return <CartItemCard
                                    key={i}
                                    productID={productID}
                                    name={name}
                                    price={price}
                                    quantity={quantity}
                                    img={img}
                                    removeFromCart={removeFromCart}
                                    handleQuantityChange={handleQuantityChange}
                                />
                            })
                        ) : <p>Cart is empty</p>
                    }
                </div>
                <h2>TOTAL: ${cartTotal}</h2>
            </>
        ) : <Redirect to="/login" />
}

export default ShoppingCart