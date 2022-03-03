import React from 'react';
import { Flex } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
    return <Flex>{movie.title}</Flex>;
};

export default MovieCard;
