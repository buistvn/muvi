import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../contexts/userContext';

const Login = () => {
    const { setUser } = useContext(UserContext);

    const router = useRouter();

    const queryString = require('query-string');

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        let pathQuery;
        if (parsed.page != null) {
            pathQuery = `?path=${parsed.path}?page=${parsed.page}`;
        } else {
            pathQuery = `?path=${parsed.path}`;
        }

        const createSession = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        request_token: parsed.request_token,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.status === 401) {
                console.log('Error creating session');
                router.push(`/login/false${pathQuery}`);
            } else {
                const body = await res.json();

                setUser((prevState) => ({
                    ...prevState,
                    sessionId: body.session_id,
                    isLoggedIn: body.success,
                }));

                router.push(`/login/${body.success}${pathQuery}`);
            }
        };

        if (parsed.approved == 'true') {
            createSession();
        } else {
            router.push(`/login/false${pathQuery}`);
        }
    }, []);

    return <></>;
};

export default Login;
