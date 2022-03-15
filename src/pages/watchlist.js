import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';

import MovieList from '../components/MovieList';
import { UserContext } from '../contexts/userContext';
import useAccountList from '../hooks/useAccountList';

const Watchlist = () => {
    const { user } = useContext(UserContext);

    const router = useRouter();
    const page = router.query.page;

    const [movies, totalPages, loading] = useAccountList(
        'watchlist',
        user.accountId,
        user.sessionId,
        page
    );

    return (
        <Flex justify="center" my="32px">
            <Flex
                flexDir="column"
                rowGap="32px"
                w={['96%', '96%', '96%', '75%']}
            >
                <Heading>Watchlist</Heading>
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
                                You haven't added any movies to your watchlist.
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

export default Watchlist;
