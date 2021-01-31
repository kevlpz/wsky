const CartItemCard = ({ name, price, quantity, img }) => {
    return (
        <div className="cart-card">
            <img src={img} alt="whiskey bottle" />
            <h4>{name}</h4>
            <span>{price}</span>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItemCard