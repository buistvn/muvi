import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Films from './components/Films';

function App() {
    return (
        <BrowserRouter>
            <div id="app">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/mubi" />
                        </Route>
                        <Route exact path="/mubi">
                            <Home />
                        </Route>
                        <Route exact path="/mubi/films">
                            <Films />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;