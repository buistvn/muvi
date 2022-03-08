import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaListAlt, FaRegListAlt } from 'react-icons/fa';

const WatchlistButton = () => {
    return (
        <Button
            colorScheme="green"
            variant="outline"
            leftIcon={<FaRegListAlt />}
        >
            Add to Watchlist
        </Button>
    );
};

export default WatchlistButton;
