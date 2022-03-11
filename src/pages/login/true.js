import { Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../_app';

const True = () => {
    const { sessionID, setAccountID, name, setName } = useContext(UserContext);
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
            }
        }
        fetchData();
    }, []);
    return <Text>Logged in Successfully: {name}</Text>;
};

export default True;
