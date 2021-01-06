import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Films from './components/Films';

require('dotenv').config()

function App() {
    // const API_KEY = process.env.TMDB_API_KEY;

    return (
        <HashRouter basename="/">
            <div id="app">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/films">
                        <Films />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;