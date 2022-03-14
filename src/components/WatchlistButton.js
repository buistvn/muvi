import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { FaListAlt, FaRegListAlt } from 'react-icons/fa';
import { UserContext } from '../pages/_app';

const WatchlistButton = ({ state, id, update, setUpdate }) => {
    const { accountID, sessionID } = useContext(UserContext);

    const handleClick = () => {
        async function addToList() {
            const res = await fetch(
                `https://api.themoviedb.org/3/account/${accountID}/watchlist?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionID}`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        media_type: 'movie',
                        media_id: id,
                        watchlist: !state,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.status === 401) {
                console.log('== Error: No Session ID');
            } else {
                const body = await res.json();
                setUpdate(!update);
            }
        }
        addToList();
    };

    return (
        <>
            {!state ? (
                <Button
                    colorScheme="green"
                    variant="outline"
                    leftIcon={<FaRegListAlt />}
                    onClick={handleClick}
                >
                    Add to Watchlist
                </Button>
            ) : (
                <Button
                    colorScheme="green"
                    variant="solid"
                    leftIcon={<FaListAlt />}
                    onClick={handleClick}
                >
                    Added
                </Button>
            )}
        </>
    );
};

export default WatchlistButton;
