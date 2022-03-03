import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
//import fetch from 'isomorphic-unfetch';


export default function LoginLink() {
    const [ requestToken, setRequestToken ] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (res.status === 401) {
                console.log("== Error: No Token");
            } else {
                const body = await res.json();
                setRequestToken(body.request_token);
                console.log("Recieved Token", requestToken)
            }
        }
        fetchData();
    }, []);
    
    const queryParams = new URLSearchParams({
        redirect_to: process.env.NEXT_PUBLIC_REDIRECT_URL
    })
    const baseUrl = "https://www.themoviedb.org/authenticate/";
    const url = `${baseUrl}${requestToken}?${queryParams.toString()}`;
    return <a href={url}><Button variant="ghost">Login with TMDB</Button></a>
}