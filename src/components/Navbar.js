import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { RiMovie2Line } from 'react-icons/ri';

import ColorModeSwitcher from './ColorModeSwitcher';

const Navbar = () => {
    return (
        <Flex justify="center">
            <Flex justify="space-between" w="80%" py="16px">
                <Flex as={Link} to="/home" align="center">
                    <Icon as={RiMovie2Line} w="36px" h="36px" />
                    <Heading>MUVI</Heading>
                </Flex>
                <Flex columnGap="16px">
                    <Button as={Link} to="/movies" variant="ghost">
                        Movies
                    </Button>
                    <Button as={Link} to="/favorites" variant="ghost">
                        Favorites
                    </Button>
                    <Button as={Link} to="/watchlist" variant="ghost">
                        Watchlist
                    </Button>
                    <ColorModeSwitcher />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
