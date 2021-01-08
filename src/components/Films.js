import React, { useEffect, useState } from 'react';
import './Films.css';
import { NavbarAlt } from './Navbar';
import List from './List';
import axios from 'axios';

function Films() {
    const API_KEY = process.env.TMDB_API_KEY;
    const [film, setFilm] = useState({
        page: "",
        results: [],
        details: ""
    })

    const showPopularFilms = (e) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((data) => {
                var results = data.data.results;
                setFilm((prevState) => {
                    console.log(results);
                    return {...prevState, results: results, page: "popular"};
                });
            })
            .catch((error) => console.log("Error: ", error.message));
    }

    useEffect(() => showPopularFilms());

    return (
        <div className="filmsSection">
            <NavbarAlt showPopularFilms={showPopularFilms}/>
            <div className="filmsContent">
                <List page={film.page} results={film.results}/>
            </div>
        </div>
    );
}

export default Films;