import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Divider, Flex, Heading, Spinner } from '@chakra-ui/react';

import CategoryMenu from '../../components/CategoryMenu';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import useMovieCategory from '../../hooks/useMovieCategory';

const categories = {
    POPULAR: { pathname: 'popular', query: 'popular' },
    TOP_RATED: { pathname: 'top-rated', query: 'top_rated' },
    NOW_PLAYING: { pathname: 'now-playing', query: 'now_playing' },
};

const Movies = () => {
    const router = useRouter();
    const category = router.query.category;
    let categoryQuery;
    if (category === categories.POPULAR.pathname) {
        categoryQuery = categories.POPULAR.query;
    } else if (category === categories.TOP_RATED.pathname) {
        categoryQuery = categories.TOP_RATED.query;
    } else if (category === categories.NOW_PLAYING.pathname) {
        categoryQuery = categories.NOW_PLAYING.query;
    }
    const [page, setPage] = useState(1);
    const [movies, totalPages, loading] = useMovieCategory(categoryQuery, page);

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
                <Flex justify="space-between" align="center">
                    {category === categories.POPULAR.pathname && (
                        <Heading>Popular</Heading>
                    )}
                    {category === categories.TOP_RATED.pathname && (
                        <Heading>Top Rated</Heading>
                    )}
                    {category === categories.NOW_PLAYING.pathname && (
                        <Heading>Now Playing</Heading>
                    )}
                    <CategoryMenu categories={categories} setPage={setPage} />
                </Flex>
                {!loading ? (
                    <>
                        <MovieList movies={movies} />
                        {totalPages > 1 && (
                            <>
                                <Divider />
                                <Pagination
                                    page={page}
                                    setPage={setPage}
                                    totalPages={totalPages}
                                />
                            </>
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

export default Movies;
