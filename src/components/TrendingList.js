import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import MovieCard from './MovieCard';

const TrendingList = ({ movies }) => {
    const scrollbarColor = useColorModeValue('gray.400', 'gray.500');

    return (
        <Flex
            gap={['4px', '8px', '12px', '12px']}
            overflowX="scroll"
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
                <Flex
                    shrink="0"
                    basis={['25%', '20%', '15%', '15%']}
                    key={movie.id}
                >
                    <MovieCard movie={movie} />
                </Flex>
            ))}
        </Flex>
    );
};

export default TrendingList;
