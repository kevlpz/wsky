import { useState, useEffect } from 'react'
import axios from 'axios'
import FeaturedCard from './FeaturedCard.js'

const Featured = () => {
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
            url: 'http://localhost:5000/products',
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
                    return <FeaturedCard key={product.id} name={product.name} price={`$${product.price}`} img={product.img} />
                })}
            </div>
        ) : null
    )
}

export default Featured