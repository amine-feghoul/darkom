import React from 'react'
import ProductCard from './ProductCard'
import './LatestProducts.css'
function LatestProducts() {
    return (
        <div className="our-latest-products-container">
            <div className="our-latest-products-wrapper">
            <h1>Our Latest <span>Products</span></h1>
            <h3>check our latest exciting products</h3>
            <div className="products-grid">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            </div>
        </div>
    )
}

export default LatestProducts
