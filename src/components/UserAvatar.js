import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import {
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
} from '@chakra-ui/react';

import { UserContext } from '../contexts/userContext';

const UserAvatar = () => {
    const { user, setUser } = useContext(UserContext);

    const router = useRouter();

    const toast = useToast();

    const handleClick = () => {
        const deleteSession = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
                {
                    method: 'DELETE',
                    body: JSON.stringify({
                        session_id: user.sessionId,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.status === 401) {
                console.log('Error deleting session');
            } else {
                toast({
                    title: 'Logged Out',
                    description: `Successfully logged out of: ${user.username}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                setUser({
                    username: '',
                    avatar: '',
                    accountId: '',
                    sessionId: '',
                    isLoggedIn: false,
                });

                router.push('/');
            }
        };

        deleteSession();
    };

    return (
        <Menu>
            <Avatar
                as={MenuButton}
                size="sm"
                name={user.username}
                src={user.avatar}
            />
            <MenuList>
                <MenuItem
                    fontSize={['14px', '14px', '16px', '16px']}
                    onClick={handleClick}
                >
                    Sign out
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserAvatar;
