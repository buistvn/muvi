import React from 'react';
import {
    Box,
    Flex,
    Grid,
    Heading,
    Icon,
    Image,
    Tag,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

import FavoritesButton from './FavoritesButton';
import WatchlistButton from './WatchlistButton';

const MovieDetails = ({
    details,
    favorite,
    watchlist,
    user,
    update,
    setUpdate,
}) => {
    const altTextColor = useColorModeValue('gray.400', 'gray.500');

    const title = details.title;
    const year = details.release_date
        ? details.release_date.split('-')[0]
        : null;
    const runtime = details.runtime || null;
    const rating = details.vote_average || null;
    const synopsis = details.overview || null;
    const genres = details.genres.length ? details.genres : null;
    const poster = details.poster_path
        ? `https://image.tmdb.org/t/p/original/${details.poster_path}`
        : null;
    const id = details.id;

    return (
        <Grid templateColumns="35% 60%" justifyContent="space-between" w="100%">
            {poster ? (
                <Image src={poster} w="100%" borderRadius="8px" />
            ) : (
                <Box
                    w="100%"
                    border="1px"
                    borderColor="gray.700"
                    borderRadius="8px"
                    background="gray.900"
                    style={{ aspectRatio: '2/3' }}
                />
            )}
            <Flex flexDir="column" rowGap="32px">
                <Flex flexDir="column" rowGap="4px">
                    <Heading size="4xl">{title}</Heading>
                    <Flex columnGap="4px">
                        {year && (
                            <Text color={altTextColor} fontSize="18px">
                                {year}
                            </Text>
                        )}
                        {year && runtime && (
                            <Text color={altTextColor} fontSize="18px">
                                •
                            </Text>
                        )}
                        {runtime && (
                            <Text color={altTextColor} fontSize="18px">
                                {runtime} min
                            </Text>
                        )}
                    </Flex>
                </Flex>
                {rating && (
                    <Flex align="center" columnGap="4px">
                        <Icon
                            as={FaStar}
                            w="24px"
                            h="24px"
                            color="yellow.300"
                        />
                        <Flex align="flex-end">
                            <Text
                                fontWeight="700"
                                fontSize="32px"
                                lineHeight="0.9"
                            >
                                {rating}
                            </Text>
                            <Text color={altTextColor} lineHeight="1">
                                /10
                            </Text>
                        </Flex>
                    </Flex>
                )}
                {user && (
                    <Flex columnGap="16px">
                        <FavoritesButton
                            state={favorite}
                            id={id}
                            update={update}
                            setUpdate={setUpdate}
                        />
                        <WatchlistButton
                            state={watchlist}
                            id={id}
                            update={update}
                            setUpdate={setUpdate}
                        />
                    </Flex>
                )}
                {synopsis && (
                    <Flex flexDir="column" rowGap="4px">
                        <Text color={altTextColor} fontSize="18px">
                            Synopsis
                        </Text>
                        <Text>{synopsis}</Text>
                    </Flex>
                )}
                {genres && (
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
                )}
            </Flex>
        </Grid>
    );
};

export default MovieDetails;
