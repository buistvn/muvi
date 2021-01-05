import React from 'react';
import { Link } from 'react-router-dom';
import './Films.css';

function Films() {
    return (
        <div className="filmsSection">
            <div className="filmsNavbar">
                <div className="filmsNavItems">
                    <Link to="/" className="filmsNavLogo">MUVI</Link>
                    <Link to="/films" className="filmsNavItem">Films</Link>
                </div>
            </div>
        </div>
    );
}

export default Films;