import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import YiYi from './YiYi.mp4';

function Home() {
    return (
        <div className="homeSection">
            <div className="homeNavbar">
                <div className="homeNavItems">
                    <Link to="/mubi" className="homeNavLogo">MUVI</Link>
                    <Link to="/mubi/films" className="homeNavItem">Films</Link>
                </div>
            </div>
            <div className="homeContent">
                <div className="homeDisplay">
                    <video className='homeVideo' autoPlay loop muted>
                        <source src={YiYi} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Home;