import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';

import MovieDetails from '../../components/MovieDetails';
import useMovieDetails from '../../hooks/useMovieDetails';

const Movie = () => {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [details, loading] = useMovieDetails(movieId);

    return (
        <Flex justify="center" my="32px">
            <Flex justify="center" w="75%">
                {!loading && details ? (
                    <MovieDetails details={details} />
                ) : (
                    <Spinner size="xl" />
                )}
            </Flex>
        </Flex>
    );
};

export default Movie;
