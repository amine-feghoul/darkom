import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const[click,setClick]=useState(false)
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
            <div className={click? "dark-panel ative":"dark-panel"}>

        </div>
                <div className="navbar-logo">
                    <h1> D A R <span className="logo-span">K </span>  O M </h1>
                </div>
                <div className={click? "navbar-links active":"navbar-links"}>
                    <ul className= "nav-links-list" >
                        <li className="nav-links-item"> 
                            <Link className="nav-link" to="/"> Home 
                            <div className="nav-link-underline"></div></Link>
                        </li>
                        <li className="nav-links-item"> 
                            <Link className="nav-link" to="/about">About
                            <div className="nav-link-underline"></div></Link>  
                        </li>
                        <li className="nav-links-item"> 
                            <Link className="nav-link" to="/products">Products
                            <div className="nav-link-underline"></div></Link>  
                        </li>
                        <li className="nav-links-item"> 
                            <Link className="nav-link" to="/blog">Blog
                            <div className="nav-link-underline"></div></Link>  
                        </li>
                        <li className="nav-links-item"> 
                            <Link className="nav-link" to="/contact">Contact
                            <div className="nav-link-underline"></div></Link> 
                        </li>
                        <li id="shopping-cart-link"> 
                            <Link className="nav-link" ><i className="fas fa-search"></i></Link>
                        </li>
                        <li id="sign-in-btn">
                            <Link className="nav-link">sign in </Link> 
                        </li>
                  
                         
                       
                    </ul>
                    

                </div>
                <a className="bars" onClick={()=>{setClick(!click) }}><i className={click?"fas fa-times":"fas fa-bars"}></i></a>
            </div>
        </div>
    )
}

export default Navbar
