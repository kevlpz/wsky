import { useState } from 'react'
import axios from 'axios'

const FeaturedCard = ({ name, id, price, img, history, setCartChange, isLoggedIn }) => {
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        if(isLoggedIn) {
            axios({
                method: 'post',
                data: {productID: id},
                url: 'http://localhost:5000/cart',
                withCredentials: true
            })
            .then(() => {
                setCartChange(true)
                setAdded(true)
            })
            .catch(err => console.log('err: ', err))
        } else {
            history.push('/login')
        }
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