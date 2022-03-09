import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Divider, Flex, Heading, Spinner } from '@chakra-ui/react';

import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import useSearchMovies from '../hooks/useSearchMovies';

const Search = () => {
    const [page, setPage] = useState(1);
    const router = useRouter();
    const query = router.query.q;
    const [movies, totalPages, loading] = useSearchMovies(query, page);

    useEffect(() => {
        setPage(1);
    }, [query]);

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
                <Heading>Results for "{query}"</Heading>
                {!loading ? (
                    <>
                        <MovieList movies={movies} />
                        <Divider />
                        {totalPages > 1 && (
                            <Pagination
                                page={page}
                                setPage={setPage}
                                totalPages={totalPages}
                            />
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
