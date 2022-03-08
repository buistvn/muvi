import React from 'react';
import {
    Flex,
    Grid,
    Heading,
    Image,
    Tag,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import FavoritesButton from './FavoritesButton';
import WatchlistButton from './WatchlistButton';

const MovieDetails = ({ details }) => {
    const altTextColor = useColorModeValue('gray.400', 'gray.500');
    console.log(details);

    const title = details.title;
    const year = details.release_date.split('-')[0];
    const runtime = details.runtime;
    const synopsis = details.overview;
    const genres = details.genres;
    const poster = details.poster_path
        ? `https://image.tmdb.org/t/p/original/${details.poster_path}`
        : null;

    return (
        <Grid templateColumns="35% 60%" justifyContent="space-between" w="100%">
            <Image src={poster} w="100%" borderRadius="8px" />
            <Flex flexDir="column" rowGap="32px">
                <Flex flexDir="column" rowGap="4px">
                    <Heading size="4xl">{title}</Heading>
                    <Text color={altTextColor} fontSize="18px">
                        {year} • {runtime} min
                    </Text>
                </Flex>
                <Flex columnGap="16px">
                    <FavoritesButton />
                    <WatchlistButton />
                </Flex>
                <Flex flexDir="column" rowGap="4px">
                    <Text color={altTextColor} fontSize="18px">
                        Synopsis
                    </Text>
                    <Text>{synopsis}</Text>
                </Flex>
                <Flex flexDir="column" rowGap="4px">
                    <Text color={altTextColor} fontSize="18px">
                        Genres
                    </Text>
                    <Flex columnGap="8px">
                        {genres.map((genre) => {
                            return (
                                <Tag size="lg" key={genre.id}>
                                    {genre.name}
                                </Tag>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Grid>
    );
};

export default MovieDetails;
