import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<Movies />}>
                        {/*
                        <Route index element={} />
                        <Route path=":movieId" element={} />
                        */}
                    </Route>
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};

export default App;
