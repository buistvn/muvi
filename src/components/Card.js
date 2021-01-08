import React from 'react';
import './Card.css';

function Card({result, id}) {
    return (
        <div className="cardContainer" id={result.id}>
            <div className="cardMedia">
                <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} className="cardPoster" alt="placeholder"></img>
            </div>
            <div className="cardText">
                <p className="cardTitle">{result.title}</p>
                <p className="cardReleaseDate">{result.release_date.split("-")[0]}</p>
                <p className="cardRating">{result.vote_average}</p>
            </div>
        </div>
    );
}

export default Card;