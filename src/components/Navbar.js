import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [navbarContainer, setNavbarContainer] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(false);
    const [navbarItem, setNavbarItem] = useState(false);
    
    const setPageType = (pageType) => {
        switch (pageType) {
            case "home":
                setNavbarContainer(false);
                setNavbarLogo(false);
                setNavbarItem(false);
                break;
            case "films":
                setNavbarContainer(true);
                setNavbarLogo(true);
                setNavbarItem(true);
                break;
            case "search":
                setNavbarContainer(true);
                setNavbarLogo(true);
                setNavbarItem(true);
                break;
            default:
                setNavbarContainer(false);
                setNavbarLogo(false);
                setNavbarItem(false);
                break;
        }
    }

    return (
        <div className={navbarContainer ? "navbarContainerAlt" : "navbarContainer"}>
            <div className="navbarItems">
                <Link to="/" className={navbarLogo ? "navbarLogoAlt" : "navbarLogo"} onClick={() => setPageType("home")}>MUVI</Link>
                <div className="navbarRight">
                    <Link to="/films" className={navbarItem ? "navbarItemAlt" : "navbarItem"} onClick={() => setPageType("films")}>Films</Link>
                    <div className="navbarSearch">
                        <input type="text" className="navbarInput"></input>
                        <button type="button" className="navbarButton"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;