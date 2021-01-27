import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const CategoryPage = ({ category }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5000/products/${category}`,
            withCredentials: true
        })
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="category-page">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default CategoryPage