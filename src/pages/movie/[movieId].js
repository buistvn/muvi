import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';

import MovieDetails from '../../components/MovieDetails';
import useMovieDetails from '../../hooks/useMovieDetails';
import { UserContext } from '../_app';

const Movie = () => {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [details, loading] = useMovieDetails(movieId);
    const { user, sessionID } = useContext(UserContext);
    const [favorite, setFavorite] = useState(false);
    const [watchlist, setWatchlist] = useState(false);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionID}`
            );
            if (res.status === 401) {
                console.log('== Error: No Token');
            } else {
                const body = await res.json();
                setWatchlist(body.watchlist);
                setFavorite(body.favorite);
            }
        }
        if (user) fetchData();
    }, [update]);

    return (
        <Flex justify="center" my="32px">
            <Flex justify="center" w="75%">
                {!loading && details ? (
                    <MovieDetails
                        details={details}
                        favorite={favorite}
                        watchlist={watchlist}
                        user={user}
                        update={update}
                        setUpdate={setUpdate}
                    />
                ) : (
                    <Spinner size="xl" />
                )}
            </Flex>
        </Flex>
    );
};

export default Movie;
