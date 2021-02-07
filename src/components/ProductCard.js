import { useState } from 'react'

const ProductCard = ({ product, addToCart, isLoggedIn, history }) => {
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        if(isLoggedIn) {
            addToCart(product.id)
            setAdded(true)
        } else {
            history.push('/login')
        }
    }

    return (
        <div className="product-card-container">
            <img src={product.img} className="product-img" alt="whiskey" />
            <div className="card-info">
                <label className="product-name">{product.name}</label>
                <label className="-product-price">{product.price}</label>
                {
                    added ? (
                        <button>Added!</button>
                    ) : (
                        <button onClick={() => handleAddToCart()}>Add to cart</button>
                    )
                }
            </div>
        </div>
    )
}

export default ProductCard