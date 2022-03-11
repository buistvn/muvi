import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '../components/Navbar';

export const UserContext = React.createContext();

const MyApp = ({ Component, pageProps }) => {
    const [user, setUser] = useState(false);
    const [sessionID, setSessionID] = useState('');
    const [accountID, setAccountID] = useState('');
    const [name, setName] = useState('');
    const value = {
        user,
        setUser,
        sessionID,
        setSessionID,
        accountID,
        setAccountID,
        name,
        setName,
    };
    return (
        <UserContext.Provider value={value}>
            <ChakraProvider>
                <Navbar />
                <Component {...pageProps} />
            </ChakraProvider>
        </UserContext.Provider>
    );
};

export default MyApp;
