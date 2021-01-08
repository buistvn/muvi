import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Films from './components/Films';

require('dotenv').config()

function App() {
    return (
        <HashRouter basename="/">
            <div id="app">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/films">
                        <Films/>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;