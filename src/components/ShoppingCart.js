import CartItemCard from './CartItemCard'

const ShoppingCart = ({ cartItems, cartTotal, removeFromCart, handleQuantityChange }) => {
        return (
            <>
                <div className="shopping-cart-container">
                    {
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
                    }
                </div>
                <h2>TOTAL: ${cartTotal}</h2>
            </>
        )
}

export default ShoppingCart