import CartItemCard from './CartItemCard'

const ShoppingCart = ({ cartItems }) => {
        return (
            <div className="shopping-cart-container">
                {
                    cartItems.map(({ name, price, quantity, img, itemID }, i) => {
                        return <CartItemCard
                            key={i}
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