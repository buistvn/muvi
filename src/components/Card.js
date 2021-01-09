import React from 'react';
import './Card.css';
import Placeholder from '../media/Placeholder.png';

function Card({showDetails, result}) {
    var cardPoster = result.poster_path ? `https://image.tmdb.org/t/p/w200${result.poster_path}` : Placeholder;
    var cardReleaseDate = result.release_date ? result.release_date.split("-")[0] : result.release_date;

    return (
        <div className="cardContainer" id={result.id}>
            <div className="cardMedia">
                <img src={cardPoster} className="cardPoster" alt="Placeholder" onClick={showDetails}></img>
            </div>
            <div className="cardText">
                <p className="cardTitle" onClick={showDetails}>{result.title}</p>
                <p className="cardReleaseDate">{cardReleaseDate}</p>
            </div>
        </div>
    );
}

export default Card;