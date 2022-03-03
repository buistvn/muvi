import React, { useState } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

import MovieList from '../../components/MovieList';
import useMovieCategory from '../../hooks/useMovieCategory';

const filters = {
    NOW_PLAYING: 'now_playing',
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
};

const Movies = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(filters.NOW_PLAYING);
    const [movies, loading] = useMovieCategory(page, filter);

    return (
        <Flex>{!loading ? <MovieList movies={movies} /> : <Spinner />}</Flex>
    );
};

export default Movies;
