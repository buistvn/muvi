import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoritesButton = () => {
    // TODO: Fetch "added" state from API instead after user is implemented
    const [addedToList, setAddedToList] = useState(false);

    const handleClick = () => {
        setAddedToList(!addedToList);
    };

    return (
        <>
            {!addedToList ? (
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
