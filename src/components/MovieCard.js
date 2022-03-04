import React, { useState } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
    const [hover, setHover] = useState(false);

    const title = movie.title;
    const year = movie.release_date.split('-')[0];
    const poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    return (
        <Flex
            pos="relative"
            style={hover ? { cursor: 'pointer' } : null}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={poster}
                alt={title}
                h="100%"
                borderRadius="8px"
                style={hover ? { filter: 'brightness(25%)' } : null}
            />
            {hover && (
                <Flex flexDir="column" pos="absolute" bottom="0%" p="16px">
                    <Text color="white" fontWeight="700" fontSize="20px">
                        {title}
                    </Text>
                    <Text color="gray.400">{year}</Text>
                </Flex>
            )}
        </Flex>
    );
};

export default MovieCard;
