import CartItemCard from './CartItemCard'

const ShoppingCart = ({ cartItems, removeFromCart }) => {
        return (
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
                        />
                    })
                }
            </div>
        )
}

export default ShoppingCart