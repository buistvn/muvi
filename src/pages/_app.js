import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
