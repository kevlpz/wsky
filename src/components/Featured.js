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

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/products',
            withCredentials: true
        })
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
        }, [])

    return (
        <div className="featured">
            {products.slice(0, 2).map(product => {
                return <FeaturedCard key={product.id} name={product.name} price={`$${product.price}`} img={product.img} />
            })}
        </div>
    )
}

export default Featured