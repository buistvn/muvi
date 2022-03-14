import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
    const [hover, setHover] = useState(false);

    const title = movie.title;
    const year = movie.release_date ? movie.release_date.split('-')[0] : null;
    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        : null;
    const path = `/movie/${movie.id}`;

    return (
        <Link href={path} w="100%" h="100%">
            <Flex
                pos="relative"
                style={hover ? { cursor: 'pointer' } : null}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {poster ? (
                    <Image
                        src={poster}
                        alt={title}
                        borderRadius="8px"
                        style={hover ? { filter: 'brightness(25%)' } : null}
                    />
                ) : (
                    <Box
                        w="100%"
                        h="100%"
                        border="1px"
                        borderColor="gray.700"
                        borderRadius="8px"
                        background="gray.900"
                        style={{ aspectRatio: '2/3' }}
                    />
                )}
                {(hover || !poster) && (
                    <Flex
                        flexDir="column"
                        pos="absolute"
                        bottom="0%"
                        p={['8px', '8px', '12px', '16px']}
                    >
                        <Text
                            color="white"
                            fontWeight="700"
                            fontSize={['14px', '14px', '16px', '20px']}
                        >
                            {title}
                        </Text>
                        <Text
                            color="gray.400"
                            fontSize={['10px', '10px', '12px', '16px']}
                        >
                            {year}
                        </Text>
                    </Flex>
                )}
            </Flex>
        </Link>
    );
};

export default MovieCard;
