import React from 'react';
import {
    AspectRatio,
    Box,
    Flex,
    Heading,
    Image,
    Spinner,
    Text,
} from '@chakra-ui/react';

import FeatureSection from '../components/FeatureSection';
import TrendingList from '../components/TrendingList';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Home = () => {
    const [movies, loading] = useTrendingMovies();

    return (
        <Box>
            <Flex justify="center" pos="relative">
                <AspectRatio w="100%" ratio={21 / 9}>
                    <Image src="/background.jpg" />
                </AspectRatio>
                <Box pos="absolute" top="15%" left={['2%', '2%', '2%', '12%']}>
                    <Text
                        color="white"
                        fontWeight="500"
                        fontSize={['24px', '36px', '48px', '60px']}
                    >
                        A NEW MOVIE
                    </Text>
                    <Text
                        color="white"
                        fontWeight="500"
                        fontSize={['24px', '36px', '48px', '60px']}
                    >
                        EVERYDAY
                    </Text>
                </Box>
            </Flex>
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
                    <FeatureSection />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
