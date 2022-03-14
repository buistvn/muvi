import React from 'react';
import { Flex, Heading, Spinner, Box, Text } from '@chakra-ui/react';
import TrendingList from '../components/TrendingList';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Home = () => {
    const [movies, loading] = useTrendingMovies();

    return (
        <Box>
            <Flex justify="center" my="32px">
                <Flex
                    flexDir="column"
                    rowGap="32px"
                    w={['96%', '96%', '96%', '75%']}
                >
                    <Heading>Trending</Heading>
                    {!loading ? (
                        <TrendingList movies={movies} />
                    ) : (
                        <Flex justify="center">
                            <Spinner size="xl" />
                        </Flex>
                    )}
                    <Heading>About MUVI</Heading>
                    <Text>
                        MUVI is a web app that uses the TMDB API to allow users
                        to search and explore movies. In addition, users can
                        login to TMDB to save their favorite movies and create a
                        watchlist.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
