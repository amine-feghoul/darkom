import React from 'react'
import landing_darkom from './landing_darkom2.jfif'
import './Landing.css'
function Landing() {
    return (
        <div className="landing-container">
           <div className="dark-div">
                <div className=" landing-wrapper">
                    <h2 > Creativity is our passion </h2>
                    <h1 id= "heading-1"> We are <span>Darkom for multimidea</span></h1>
                    <h2 > Creative   .   Professional  .   Fast</h2>
                    <div className="landing-btns"> 
                        <a className="btn"> BROWSE OUR PRODUCTS</a>
                        <a className="btn" id="btn-white"> LEARN MORE </a>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Landing 
