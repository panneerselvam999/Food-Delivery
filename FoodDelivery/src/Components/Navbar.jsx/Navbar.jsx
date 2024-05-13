import React, { act, useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets.js"

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState("home")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className="logo" />
            <ul className="navbar-menu">
                <li onClick={() => setActiveMenu("home")} className={activeMenu === "home" ? "active" : ""} >Home</li>
                <li onClick={() => setActiveMenu("menu")} className={activeMenu === "menu" ? "active" : ""} >Menu</li>
                <li onClick={() => setActiveMenu("mobile-app")} className={activeMenu === "mobile-app" ? "active" : ""} >Mobile-App</li>
                <li onClick={() => setActiveMenu("contact-us")} className={activeMenu === "contact-us" ? "active" : ""} >Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket icon" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar