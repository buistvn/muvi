import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../_app';

const Login = () => {
    const router = useRouter();
    const queryString = require('query-string');
    const { setUser, setSessionID } = useContext(UserContext);

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        async function fetchSession() {
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
                router.push('/login/false');
            } else {
                const body = await res.json();
                setUser(body.success);
                setSessionID(body.session_id);
                router.push(`/login/${body.success}`);
            }
        }
        if (parsed.approved == 'true') fetchSession();
        else router.push('/login/false');
    }, []);

    return <></>;
};

export default Login;
