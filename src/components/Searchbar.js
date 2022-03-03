import React from 'react';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    return (
        <InputGroup w="auto">
            <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaSearch} color="gray.300" />}
            />
            <Input placeholder="Search..." />
        </InputGroup>
    );
};

export default Searchbar;
