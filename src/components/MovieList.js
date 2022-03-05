import React from 'react';
import { Grid } from '@chakra-ui/react';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <Grid
            templateColumns="19% 19% 19% 19% 19%"
            gap="12px"
            justifyContent="space-between"
        >
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </Grid>
    );
};

export default MovieList;
