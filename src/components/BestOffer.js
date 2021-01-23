import React from 'react'
import './BestOffer.css'
import bestOfferImage from './0_0_OPPO-A31.png'
function BestOffer() {
    return (
        <div className="bestOffer-container">
           
            <div className="bestOffer-wrapper">
                
                
                <div className="bestOffer-details">
                    <div className="offer-img">
                    <img alt="offer img" src={bestOfferImage}/>
                    </div>
                    <div className="bestOffer-text-btns">
                    <div className="bestOffer-text">
                        <h1> OPPO </h1>
                        <h1> OPPO A31</h1>
                        <h3> Screen 6,5'' Resolution 1600 x 720</h3>
                        <h3> CPU MTK6765 OCTA CORE</h3>
                        <h3> RAM 4GB + 64GB</h3>
                        <h3> Front Cam 8Mp </h3>
                        <h3> Main Cam: 12Mp cam principale  + 02 Mp Cam de profondeur + 02 Mp lentille macro</h3>
                        <h3> Operating System 6.1</h3>
                        <div className="bestOffer-stat">
                        <ul className="bestOffer-stat-icons">    
                            <li><h3>Price <span>$ 30</span></h3></li>
                            <li><h3><i className="fas fa-shopping-cart"></i> 54 Sold</h3> </li>
                            <li> <h3><i className="fas fa-heart"></i> 45</h3></li>
                        </ul>
                    </div>
                    </div>
                   
                    <div className="bestOffer-btns">
                        <a className="view-detail-btn"> View detail </a>
                        <a className="add-to-cart-btn"> Add to cart </a>
                    </div>
                </div>
                </div>
                <div className="offer-label"> 
                <h3> featured</h3> </div>  
            </div>
         
        </div>
    )
}

export default BestOffer
