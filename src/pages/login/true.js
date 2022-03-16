import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import { UserContext } from '../../contexts/userContext';

const True = () => {
    const { user, setUser } = useContext(UserContext);

    const router = useRouter();

    const toast = useToast();

    useEffect(() => {
        const fetchAccount = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${user.sessionId}`
            );
            if (res.status === 401) {
                console.log('Error fetching account');
            } else {
                const body = await res.json();

                setUser((prevState) => ({
                    ...prevState,
                    username: body.username,
                    accountId: body.id,
                }));

                if (body.avatar.tmdb.avatar_path != null) {
                    setUser((prevState) => ({
                        ...prevState,
                        avatar: `https://image.tmdb.org/t/p/w200${body.avatar.tmdb.avatar_path}`,
                    }));
                } else {
                    setUser((prevState) => ({
                        ...prevState,
                        avatar: '',
                    }));
                }

                toast({
                    title: 'Logged In',
                    description: `Successfully logged in as: ${body.username}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                router.push(router.query.path);
            }
        };

        fetchAccount();
    }, []);

    return <></>;
};

export default True;
