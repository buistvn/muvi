import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaListAlt, FaRegListAlt } from 'react-icons/fa';

const WatchlistButton = () => {
    // TODO: Fetch "added" state from API instead after user is implemented
    const [addedToList, setAddedToList] = useState(false);

    const handleClick = () => {
        setAddedToList(!addedToList);
    };

    return (
        <>
            {!addedToList ? (
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
