import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query !== '') {
            router.push(`/search?q=${query}`);
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
                    children={<Icon as={FaSearch} color="gray.300" />}
                />
                <Input
                    value={query}
                    placeholder="Search..."
                    onChange={handleChange}
                />
            </InputGroup>
        </form>
    );
};

export default Searchbar;
