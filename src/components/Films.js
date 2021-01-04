import React from 'react';
import { Link } from 'react-router-dom';
import './Films.css';

function Films() {
    return (
        <div className="filmsSection">
            <div className="filmsNavbar">
                <div className="filmsNavItems">
                    <Link to="/mubi" className="filmsNavLogo">MUVI</Link>
                    <Link to="/mubi/films" className="filmsNavItem">Films</Link>
                </div>
            </div>
            <p>films</p>
        </div>
    );
}

export default Films;