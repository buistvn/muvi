import React from 'react';
import { Flex, Heading, Spinner, Box, Text } from '@chakra-ui/react';
import TrendingList from '../components/TrendingList';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Home = () => {
    const [movies, loading] = useTrendingMovies();

    return (
        <Box>
            <Flex justify="center" my="32px">
                <Flex flexDir="column" rowGap="32px" w="75%">
                    <Flex justify="space-between" align="center">
                        <Heading>Trending</Heading>
                    </Flex>
                    {!loading ? (
                        <TrendingList movies={movies} />
                    ) : (
                        <Flex justify="center">
                            <Spinner size="xl" />
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex justify="center" my="32px">
                <Flex flexDir="column" rowGap="32px" w="75%">
                    <Flex justify="space-between" align="center">
                        <Heading>About Muvi</Heading>
                    </Flex>
                    <Flex justify="space-between" align="center">
                        <Text fontSize="2xl">
                            Muvi is a basic web-app that uses TMDB api to allow
                            users to search and explore movies. In addition,
                            users can login to TMDB to save their favorite
                            movies and create a watchlist.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
