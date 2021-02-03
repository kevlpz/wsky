import { useState } from 'react'

const FeaturedCard = ({ name, id, price, img, history }) => {
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        if(document.cookie) {
            axios({
                method: 'post',
                data: {productID: id},
                url: 'https://infinite-refuge-27306.herokuapp.com/cart',
                withCredentials: true
            })
            .then(() => setCartChange(true))
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