import { useToast } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../_app';
import { useRouter } from 'next/router';

const True = () => {
    const { sessionID, setAccountID, name, setName, setAvatar } =
        useContext(UserContext);
    const toast = useToast();
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionID}`
            );
            if (res.status === 401) {
                console.log('== Error: No Token');
            } else {
                const body = await res.json();
                setAccountID(body.id);
                setName(body.username);
                if (
                    body.avatar.gravatar.hash !=
                    '00f78b15fde94e9f9026ffafc7835f1a'
                ) {
                    setAvatar(
                        `https://secure.gravatar.com/avatar/${body.avatar.gravatar.hash}.jpg?s=200`
                    );
                } else if (body.avatar.tmdb.avatar_path != null) {
                    setAvatar(
                        `https://image.tmdb.org/t/p/w200${body.avatar.tmdb.avatar_path}`
                    );
                } else {
                    setAvatar('');
                }
                toast({
                    title: 'Logged In',
                    description: `Successfully logged in as: ${body.username}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                router.push('/');
            }
        }
        fetchData();
    }, []);
    return <></>;
};

export default True;
