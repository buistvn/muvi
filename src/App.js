import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Films from './components/Films';
import View from './components/View';

require('dotenv').config();

function App() {
    return (
        <HashRouter basename="/">
            <div id="app">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/films">
                        <Films/>
                    </Route>
                    {/*
                    <Route path="/films/:filmID">
                        <View/>
                    </Route>
                    */}
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;