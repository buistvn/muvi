import React from 'react';
import { Box } from '@chakra-ui/react';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <Box
            display="flex"
            overflow="hidden"
            gap="12px"
            _hover={{ overflowX: 'scroll' }}
        >
            {movies.map((movie) => (
                <Box flex="0 0 100%" flexBasis="15%">
                    <MovieCard movie={movie} key={movie.id} />
                </Box>
            ))}
        </Box>
    );
};

export default MovieList;
