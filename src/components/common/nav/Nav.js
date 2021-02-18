import React from "react";
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import PadelLogo from './images/balcon-padel-logo-png.png';

const Nav = () => {
    
    function burgerClick(){
        const nav = document.querySelector('.nav-bar-links');
        const links = document.querySelectorAll('.nav-bar-links li');

        nav.classList.toggle('nav-active');
        links.forEach(link =>{
        link.classList.toggle('fade');
        });
    }
    return (
        <div className="nav-bar-container">
            <div className="header-logo">
                <img src={PadelLogo} alt="logo"></img>
            </div>
            <ul className="nav-bar-links">
                <NavLink exact to="/" activeClassName="selected-nav-link">
                    <li>Inicio</li>
                </NavLink>
                <NavLink to="/turnos" activeClassName="selected-nav-link">
                    <li>Turnos</li>
                </NavLink>
                <NavLink to="/acerca" activeClassName="selected-nav-link">
                    <li>Acerca</li>
                </NavLink>
            </ul>
            <div id="burger-container" onClick={burgerClick}>
                <div className="burger-top"></div>
                <div className="burger-mid"></div>
                <div className="burger-bot"></div>
            </div>
        </div>
    )
}

export default Nav;