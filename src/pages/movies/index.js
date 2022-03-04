import React, { useState } from 'react';
import { Flex, Heading, Spinner } from '@chakra-ui/react';

import CategoryMenu from '../../components/CategoryMenu';
import MovieList from '../../components/MovieList';
import useMovieCategory from '../../hooks/useMovieCategory';

const categories = {
    NOW_PLAYING: 'now_playing',
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
};

const Movies = () => {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(categories.NOW_PLAYING);
    const [movies, loading] = useMovieCategory(page, category);

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
                <Flex justify="space-between" align="center">
                    {category === categories.NOW_PLAYING && (
                        <Heading>Now Playing</Heading>
                    )}
                    {category === categories.POPULAR && (
                        <Heading>Popular</Heading>
                    )}
                    {category === categories.TOP_RATED && (
                        <Heading>Top Rated</Heading>
                    )}
                    <CategoryMenu
                        categories={categories}
                        setCategory={setCategory}
                    />
                </Flex>
                <Flex justify="center">
                    {!loading ? (
                        <MovieList movies={movies} />
                    ) : (
                        <Spinner size="xl" />
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Movies;
