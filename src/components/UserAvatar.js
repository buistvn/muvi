import React, { useContext } from 'react';
import { UserContext } from '../pages/_app';
import { useRouter } from 'next/router';
import {
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
} from '@chakra-ui/react';

const UserAvatar = () => {
    const {
        setUser,
        setSessionID,
        setAccountID,
        setName,
        setAvatar,
        name,
        avatar,
        sessionID,
    } = useContext(UserContext);
    const toast = useToast();
    const router = useRouter();

    const handleClick = () => {
        async function logout() {
            const res = await fetch(
                `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
                {
                    method: 'DELETE',
                    body: JSON.stringify({
                        session_id: sessionID,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.status === 401) {
                console.log('== Error');
            } else {
                toast({
                    title: 'Logged Out',
                    description: `Successfully logged out of: ${name}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                setUser(false);
                setSessionID('');
                setAccountID('');
                setAvatar('');
                setName('');
                router.push('/');
            }
        }
        logout();
    };

    return (
        <Menu>
            <Avatar as={MenuButton} size="sm" name={name} src={avatar} />
            <MenuList>
                <MenuItem
                    fontSize={['14px', '14px', '16px', '16px']}
                    onClick={() => handleClick()}
                >
                    Sign out
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserAvatar;
