import React from 'react'
import './ProductCard.css'
function ProductCard() {
    return (
        <div className="product-card-container">
            <div className="product-card-wrapper">
                <div className="black-image-fade">
                <img  src="https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="product-pic" />
                <div className="view-detail">
                    <div className="inner-view-detail">
                        <a className="view-detail-btns"> Detail</a>
                        <a className="view-detail-btns"> Order</a>
                    </div>
                </div>
                </div>
                <div className="product-details">
                    <h2>
                        Iphone 6S plus 
                    </h2>
                    <h3>
                    Making Event WordPress Theme
                    </h3>
                    <ul className="product-stat-icons">    
                           
                            <li><i className="fas fa-shopping-cart"></i> 54 Sold </li>
                            <li className="gray_li"> <i className="fas fa-heart"></i> <span> 45</span></li>
                            <li>Price <span>$ 30</span></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
