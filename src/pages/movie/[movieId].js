import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';

import MovieDetails from '../../components/MovieDetails';
import { UserContext } from '../../contexts/userContext';
import useMovieDetails from '../../hooks/useMovieDetails';

const Movie = () => {
    const [favorite, setFavorite] = useState(false);
    const [watchlist, setWatchlist] = useState(false);
    const [update, setUpdate] = useState(false);

    const { user } = useContext(UserContext);

    const router = useRouter();
    const movieId = router.query.movieId;

    const [details, loading] = useMovieDetails(movieId);

    useEffect(() => {
        const fetchStates = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${user.sessionId}`
            );
            if (res.status === 401) {
                console.log('Error fetching states');
            } else {
                const body = await res.json();
                setWatchlist(body.watchlist);
                setFavorite(body.favorite);
            }
        };

        if (user.isLoggedIn) {
            fetchStates();
        }
    }, [update]);

    return (
        <Flex justify="center" my="32px">
            <Flex justify="center" w={['96%', '96%', '96%', '75%']}>
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
