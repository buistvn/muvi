import React from 'react';
import { Divider, Flex, Grid } from '@chakra-ui/react';

import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = ({ movies, page, setPage, totalPages }) => {
    return (
        <Flex flexDir="column" rowGap="32px">
            <Grid
                templateColumns="19% 19% 19% 19% 19%"
                gap="12px"
                justifyContent="space-between"
            >
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </Grid>
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
        </Flex>
    );
};

export default MovieList;
