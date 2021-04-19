import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarItems">
                <div className="navbarLeft">
                    <Link to="/" className="navbarLogo" replace>MUVI</Link>
                    <Link to="/films" className="navbarItem" replace>Films</Link>
                </div>
            </div>
        </div>
    );
}

function NavbarAlt({showPopularFilms, showSearchedFilms}) {
    return (
        <div className="navbarContainerAlt">
            <div className="navbarItems">
                <div className="navbarLeft">
                    <Link to="/" className="navbarLogoAlt" replace>MUVI</Link>
                    <Link to="/films" className="navbarItemAlt" onClick={showPopularFilms} replace>Films</Link>
                </div>
                <div className="navbarSearch">
                    <input type="text" className="navbarInput" onKeyPress={showSearchedFilms}></input>
                    <span className="navbarButton"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </div>
    );
}

export { Navbar, NavbarAlt };