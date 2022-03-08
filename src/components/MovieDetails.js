import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const MovieDetails = ({ details }) => {
    console.log(details);

    const title = details.title;
    const year = details.release_date.split('-')[0];

    return (
        <Flex>
            <Text>{title}</Text>
            <Text>{year}</Text>
        </Flex>
    );
};

export default MovieDetails;
