import React, { useState } from 'react';
import { sessionInfo } from '../pages/login';

function useSessionInfo() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setId] = useState("")

    setLoggedIn(sessionInfo.login);
    setId(sessionInfo.id);

    return [loggedIn, id];
}