import React from 'react';
import './Home.css';
import YiYi from '../YiYi.mp4';

function Home() {
    return (
        <div className="homeSection">
            <div className="homeContent">
                <div className="homeScreen">
                    <video className='homeVideo' autoPlay loop muted>
                        <source src={YiYi} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Home;