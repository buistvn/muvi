import React from 'react';
import { Grid } from '@chakra-ui/react';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <Grid>
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </Grid>
    );
};

export default MovieList;
