import React from 'react';
import './Home.css';
import Clip from '../media/Mirror.mp4';
import { Navbar } from './Navbar';

function Home() {
    return (
        <div className="homeSection">
            <Navbar/>
            <div className="homeContent">
                <div className="homeMedia">
                    <video className='homeVideo' autoPlay loop muted>
                        <source src={Clip} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Home;