const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card-container">
            <img src={product.img} className="product-img" alt="whiskey" />
            <div className="card-info">
                <label className="product-name">{product.name}</label>
                <label className="-product-price">{product.price}</label>
                <button onClick={() => addToCart(product.id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard