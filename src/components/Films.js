import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Films.css';
import { NavbarAlt } from './Navbar';
import List from './List';

function Films() {
    const API_KEY = process.env.TMDB_API_KEY;
    
    const [film, setFilm] = useState({
        results: [],
        page: "",
        details: ""
    })

    const showPopularFilms = (e) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => {
                var results = response.data.results;
                setFilm((prevState) => {
                    return {...prevState, results: results, page: "popular"};
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const showSearchedFilms = (e) => {
        if (e.target.className === "navbarInput" && e.key === "Enter") {
            var searchQuery = e.target.value;
            if (searchQuery) {
                axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
                    .then((response) => {
                        var results = response.data.results;
                        setFilm((prevState) => {
                            return {...prevState, results: results, page: "search"};
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    }

    const showDetails = (e) => {
        if ((e.target.className === "cardPoster" || e.target.className === "cardTitle") && e.target.parentNode.parentNode.id) {
            var filmID = e.target.parentNode.parentNode.id;
            if (filmID) {
                axios(`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US`)
                    .then((response) => {
                        var details = response.data;
                        console.log(details);
                        setFilm((prevState) => {
                            return {...prevState, details: details};
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    }

    useEffect(() => {
        showPopularFilms();
    }, []);

    return (
        <div className="filmsSection">
            <NavbarAlt showPopularFilms={showPopularFilms} showSearchedFilms={showSearchedFilms}/>
            <div className="filmsContent">
                <List showDetails={showDetails} results={film.results} page={film.page}/>
            </div>
        </div>
    );
}

export default Films;