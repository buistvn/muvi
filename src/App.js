import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Films from './components/Films';

function App() {
    return (
        <BrowserRouter>
            <div id="app">
                <div className="navbar">
                    <div className="navItems">
                        <Link to="/home" className="navLogo">MUVI</Link>
                        <Link to="/films" className="navItem">Popular Films</Link>
                    </div>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/films">
                            <Films />
                        </Route>
                    </Switch>
                </div>
                <div className="footer">
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;