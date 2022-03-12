import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';

import MovieList from '../components/MovieList';
import { UserContext } from './_app';
import useAccountList from '../hooks/useAccountList';

const Watchlist = () => {
    const router = useRouter();
    const page = router.query.page;
    const { accountID, sessionID } = useContext(UserContext);
    const [movies, totalPages, loading] = useAccountList(
        'watchlist',
        accountID,
        sessionID,
        page
    );

    return (
        <Flex justify="center" my="32px">
            <Flex flexDir="column" rowGap="32px" w="75%">
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
                                There were no matches found for your search.
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
