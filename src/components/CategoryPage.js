import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'

const CategoryPage = ({ addToCart }) => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://infinite-refuge-27306.herokuapp.com/products',
            withCredentials: true
        })
            .then(res => {
                if (category) {
                    const filteredProducts = res.data.filter(product => product.categoryID == category)
                    setProducts(filteredProducts)
                } else {
                    setProducts(res.data)
                }
            })
            .catch(err => console.log(err))
    }, [category])

    return (
        <div className="category-page">
            {
                products.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} />)
            }
        </div>
    )
}

export default CategoryPage