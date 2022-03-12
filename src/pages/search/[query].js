import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';

import MovieList from '../../components/MovieList';
import useSearchMovies from '../../hooks/useSearchMovies';

const Search = () => {
    const router = useRouter();
    const query = router.query.query;
    const page = router.query.page;
    const [movies, totalPages, loading] = useSearchMovies(query, page);

    useEffect(() => {
        router.push(`${router.asPath.split('?')[0]}?page=1`);
    }, [query]);

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
                <Heading>Results for "{query}"</Heading>
                {!loading ? (
                    <>
                        {movies && !!movies.length ? (
                            <MovieList
                                movies={movies}
                                page={page}
                                totalPages={totalPages}
                            />
                        ) : (
                            <Text>
                                There were no matches found for your search.
                            </Text>
                        )}
                    </>
                ) : (
                    <Flex justify="center">
                        <Spinner size="xl" />
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};

export default Search;
