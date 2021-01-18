import { useState, useEffect } from 'react'
import axios from 'axios'

import FeaturedCard from './FeaturedCard.js'
import balvenieImg from '../assets/doublewood.jpg'
import laphroaigImg from '../assets/laphroaig10.jpg'

const Featured = () => {
    const [products, setProducts] = useState([{
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
                console.log('data set')
            })
            .catch(err => console.log(err))
        }, [])

    return (
        <div className="featured">
            {products.slice(0, 2).map(product => {
                return <FeaturedCard name={product.name} price={`$${product.price}`} img={product.img} />
            })}
        </div>
    )
}

export default Featured