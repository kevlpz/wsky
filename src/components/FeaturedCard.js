import { useState } from 'react'

const FeaturedCard = ({ name, id, price, img, addToCart }) => {
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        addToCart(id)
        setAdded(true)
    }

    return(
        <div className="featured-card-container">
            <img className="featured-card-img" src={img} alt="whiskey" />
            <div className="card-info">
                <p><strong>NEW: {name}</strong></p>
                <p>{price}</p>
                {
                    added ? (
                        <button>ADDED!</button>
                    ) : (
                        <button onClick={() => handleAddToCart()}>ADD TO CART</button>
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedCard