import React from 'react';
import { ChakraProvider, Hide, Show } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import NavbarResponsive from '../components/NavbarResponsive';
import { UserProvider } from '../contexts/userContext';
import theme from '../themes/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <UserProvider>
                <Hide below="md">
                    <Navbar />
                </Hide>
                <Show below="md">
                    <NavbarResponsive />
                </Show>
                <Component {...pageProps} />
            </UserProvider>
        </ChakraProvider>
    );
};

export default MyApp;
