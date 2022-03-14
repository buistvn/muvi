import React, { useState } from 'react';
import { ChakraProvider, Hide, Show } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import NavbarResponsive from '../components/NavbarResponsive';
import theme from '../themes/theme';

export const UserContext = React.createContext();

const MyApp = ({ Component, pageProps }) => {
    const [user, setUser] = useState(false);
    const [sessionID, setSessionID] = useState('');
    const [accountID, setAccountID] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const value = {
        user,
        setUser,
        sessionID,
        setSessionID,
        accountID,
        setAccountID,
        name,
        setName,
        avatar,
        setAvatar,
    };

    return (
        <UserContext.Provider value={value}>
            <ChakraProvider theme={theme}>
                <Hide below="md">
                    <Navbar />
                </Hide>
                <Show below="md">
                    <NavbarResponsive />
                </Show>
                <Component {...pageProps} />
            </ChakraProvider>
        </UserContext.Provider>
    );
};

export default MyApp;
