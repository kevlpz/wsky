import CartItemCard from './CartItemCard'

const ShoppingCart = ({ cartItems }) => {
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
                        />
                    })
                }
            </div>
        )
}

export default ShoppingCart