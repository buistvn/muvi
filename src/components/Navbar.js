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
import Searchbar from './Searchbar';
import LoginLink from './LoginLink';
import UserAvatar from './UserAvatar';
import { UserContext } from '../pages/_app';

const Navbar = () => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const { user } = useContext(UserContext);

    return (
        <Flex justify="center" borderBottom="1px" borderColor={borderColor}>
            <Flex justify="space-between" w="75%" py="16px">
                <Link href="/">
                    <Flex align="center" _hover={{ cursor: 'pointer' }}>
                        <Icon as={RiMovie2Line} w="36px" h="36px" />
                        <Heading>MUVI</Heading>
                    </Flex>
                </Link>
                <Flex align="center" columnGap="16px">
                    {!user && <LoginLink />}
                    <Link href="/movies">
                        <Button variant="ghost">Movies</Button>
                    </Link>
                    {user && (
                        <>
                            <Link href="/favorites">
                                <Button variant="ghost">Favorites</Button>
                            </Link>
                            <Link href="/watchlist">
                                <Button variant="ghost">Watchlist</Button>
                            </Link>
                        </>
                    )}
                    <Searchbar />
                    <ColorModeSwitcher />
                    {user && <UserAvatar />}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
