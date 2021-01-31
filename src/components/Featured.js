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

    const addToCart = (id) => {
        console.log('id: ', id)
        axios({
            method: 'post',
            data: {productID: id},
            url: 'http://localhost:5000/cart',
            withCredentials: true
        })
        .then(res => console.log('res: ', res))
        .catch(err => console.log('err: ', err))
    }

    return (
        isLoaded ? (
            <div className="featured">
                {products.slice(0, 2).map(product => {
                    return <FeaturedCard
                        key={product.id}
                        name={product.name}
                        price={`$${product.price}`}
                        img={product.img}
                        addToCart={() => addToCart(product.id)}
                    />
                })}
            </div>
        ) : null
    )
}

export default Featured