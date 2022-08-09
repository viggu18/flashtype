import React from "react";
import './Nav.css'
import logo from './../assets/logo.png'

const Nav = () =>{
    return(
        <div className="Nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt='logo' />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a 
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/viggu18"
                    rel='noreferrer'
                    >
                        Github
                    </a>
            </div>
        </div>
    );
}

export default Nav;