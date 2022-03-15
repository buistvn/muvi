import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { UserContext } from '../contexts/userContext';

const FavoritesButton = ({ state, id, update, setUpdate }) => {
    const { user } = useContext(UserContext);

    const handleClick = () => {
        async function addToList() {
            const res = await fetch(
                `https://api.themoviedb.org/3/account/${user.accountId}/favorite?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${user.sessionId}`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        media_type: 'movie',
                        media_id: id,
                        favorite: !state,
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
                    colorScheme="red"
                    variant="outline"
                    leftIcon={<FaRegHeart />}
                    onClick={handleClick}
                >
                    Add to Favorites
                </Button>
            ) : (
                <Button
                    colorScheme="red"
                    variant="solid"
                    leftIcon={<FaHeart />}
                    onClick={handleClick}
                >
                    Added
                </Button>
            )}
        </>
    );
};

export default FavoritesButton;
