import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    const [query, setQuery] = useState('');

    const router = useRouter();

    const textColor = useColorModeValue('gray.400', 'gray.500');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const inputColor = useColorModeValue('gray.100', 'gray.900');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query !== '') {
            router.push(`/search/${query}`);
        }
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup w="auto">
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaSearch} color={textColor} />}
                />
                <Input
                    value={query}
                    placeholder="Search..."
                    borderColor={borderColor}
                    background={inputColor}
                    color={textColor}
                    onChange={handleChange}
                />
            </InputGroup>
        </form>
    );
};

export default Searchbar;
