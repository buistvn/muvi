import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoritesButton = () => {
    return (
        <Button colorScheme="red" variant="outline" leftIcon={<FaRegHeart />}>
            Add to Favorites
        </Button>
    );
};

export default FavoritesButton;
