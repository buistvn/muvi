import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import MovieCard from './MovieCard';

const TrendingList = ({ movies }) => {
    const scrollbarColor = useColorModeValue('gray.400', 'gray.500');

    return (
        <Box
            display="flex"
            overflowX="scroll"
            gap="12px"
            pb="8px"
            sx={{
                '&::-webkit-scrollbar': {
                    height: '4px',
                    background: `transparent`,
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '8px',
                    background: scrollbarColor,
                },
            }}
        >
            {movies.map((movie) => (
                <Box flex="0 0 100%" flexBasis="15%" key={movie.id}>
                    <MovieCard movie={movie} />
                </Box>
            ))}
        </Box>
    );
};

export default TrendingList;
