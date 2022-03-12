import { Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../_app';

const True = () => {
    const { sessionID, setAccountID, name, setName, setAvatar } =
        useContext(UserContext);
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
            }
        }
        fetchData();
    }, []);
    return <Text>Logged in Successfully: {name}</Text>;
};

export default True;
