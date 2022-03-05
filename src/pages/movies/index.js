import React, { useState } from 'react';
import { Divider, Flex, Heading, Spinner } from '@chakra-ui/react';

import CategoryMenu from '../../components/CategoryMenu';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import useMovieCategory from '../../hooks/useMovieCategory';

const categories = {
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
    NOW_PLAYING: 'now_playing',
};

const Movies = () => {
    const [category, setCategory] = useState(categories.POPULAR);
    const [page, setPage] = useState(1);
    const [movies, totalPages, loading] = useMovieCategory(category, page);

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
                <Flex justify="space-between" align="center">
                    {category === categories.POPULAR && (
                        <Heading>Popular</Heading>
                    )}
                    {category === categories.TOP_RATED && (
                        <Heading>Top Rated</Heading>
                    )}
                    {category === categories.NOW_PLAYING && (
                        <Heading>Now Playing</Heading>
                    )}
                    <CategoryMenu
                        categories={categories}
                        setCategory={setCategory}
                        setPage={setPage}
                    />
                </Flex>
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

export default Movies;
