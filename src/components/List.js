import React from 'react';
import './List.css';
import Card from './Card';

function List({page, results}) {
    var listHeader = "";

    if (page === "popular") {
        listHeader = "Most Popular";
    }
    else if (page === "search") {
        listHeader = "Search Results";
    }

    return (
        <div className="listContainer">
            <h1 className="listHeader">{listHeader}</h1>
            <div className="listCards">
                {results.map((result) => {
                    return <Card key={result.id} result={result}/>;
                })}
            </div>
        </div>
    );
}

export default List;