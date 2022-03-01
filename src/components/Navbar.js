import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Flex,
    Heading,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { RiMovie2Line } from 'react-icons/ri';

import ColorModeSwitcher from './ColorModeSwitcher';
import Searchbar from './Searchbar';

const Navbar = () => {
    const borderColor = useColorModeValue('gray.100', 'gray.900');

    return (
        <Flex justify="center" borderBottom="1px" borderColor={borderColor}>
            <Flex justify="space-between" w="80%" py="16px">
                <Flex as={Link} to="/home" align="center">
                    <Icon as={RiMovie2Line} w="36px" h="36px" />
                    <Heading>MUVI</Heading>
                </Flex>
                <Flex align="center" columnGap="16px">
                    <Link to="/movies">
                        <Button variant="ghost">Movies</Button>
                    </Link>
                    <Link to="/favorites">
                        <Button variant="ghost">Favorites</Button>
                    </Link>
                    <Link to="/watchlist">
                        <Button variant="ghost">Watchlist</Button>
                    </Link>
                    <Searchbar />
                    <ColorModeSwitcher />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
