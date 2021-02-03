import { useState, useEffect } from 'react'
import axios from 'axios'
import FeaturedCard from './FeaturedCard.js'

const Featured = ({ addToCart, setCartChange, history }) => {
    const [products, setProducts] = useState([{
        id: '',
        name: '',
        price: '',
        img: ''
    }])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://infinite-refuge-27306.herokuapp.com/products',
            withCredentials: true
        })
            .then(res => {
                setProducts(res.data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        isLoaded ? (
            <div className="featured">
                {products.slice(0, 2).map(product => {
                    return <FeaturedCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={`$${product.price}`}
                        img={product.img}
                        addToCart={addToCart}
                        setCartChange={setCartChange}
                        history={history}
                    />
                })}
            </div>
        ) : null
    )
}

export default Featured