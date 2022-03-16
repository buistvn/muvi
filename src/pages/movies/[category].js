import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Spinner } from '@chakra-ui/react';

import CategoryMenu from '../../components/CategoryMenu';
import MovieList from '../../components/MovieList';
import useMovieCategory from '../../hooks/useMovieCategory';

const categories = {
    POPULAR: { pathname: 'popular', query: 'popular' },
    TOP_RATED: { pathname: 'top-rated', query: 'top_rated' },
    NOW_PLAYING: { pathname: 'now-playing', query: 'now_playing' },
};

const Movies = () => {
    const router = useRouter();
    const category = router.query.category;
    const page = router.query.page;

    let categoryQuery;
    if (category === categories.POPULAR.pathname) {
        categoryQuery = categories.POPULAR.query;
    } else if (category === categories.TOP_RATED.pathname) {
        categoryQuery = categories.TOP_RATED.query;
    } else if (category === categories.NOW_PLAYING.pathname) {
        categoryQuery = categories.NOW_PLAYING.query;
    }

    const [movies, totalPages, loading] = useMovieCategory(categoryQuery, page);

    return (
        <Flex justify="center" my="32px">
            <Flex
                flexDir="column"
                rowGap="32px"
                w={['96%', '96%', '96%', '75%']}
            >
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
                    <CategoryMenu categories={categories} />
                </Flex>
                {!loading ? (
                    <MovieList
                        movies={movies}
                        page={page}
                        totalPages={totalPages}
                    />
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
