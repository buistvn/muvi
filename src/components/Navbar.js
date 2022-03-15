import React, { useContext } from 'react';
import Link from 'next/link';
import {
    Button,
    Flex,
    Heading,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { RiMovie2Line } from 'react-icons/ri';

import ColorModeSwitcher from './ColorModeSwitcher';
import LoginLink from './LoginLink';
import Searchbar from './Searchbar';
import UserAvatar from './UserAvatar';
import { UserContext } from '../contexts/userContext';

const Navbar = () => {
    const { user } = useContext(UserContext);

    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Flex justify="center" borderBottom="1px" borderColor={borderColor}>
            <Flex
                justify="space-between"
                w={['96%', '96%', '96%', '75%']}
                py="16px"
            >
                <Link href="/">
                    <Flex align="center" _hover={{ cursor: 'pointer' }}>
                        <Icon as={RiMovie2Line} w="32px" h="32px" />
                        <Heading>MUVI</Heading>
                    </Flex>
                </Link>
                <Flex align="center" columnGap={['8px', '8px', '8px', '16px']}>
                    {!user.isLoggedIn && <LoginLink />}
                    <Link href="/movies/popular?page=1">
                        <Button variant="ghost">Movies</Button>
                    </Link>
                    {user.isLoggedIn && (
                        <>
                            <Link href="/favorites?page=1">
                                <Button variant="ghost">Favorites</Button>
                            </Link>
                            <Link href="/watchlist?page=1">
                                <Button variant="ghost">Watchlist</Button>
                            </Link>
                        </>
                    )}
                    <Searchbar />
                    <ColorModeSwitcher />
                    {user.isLoggedIn && <UserAvatar />}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
