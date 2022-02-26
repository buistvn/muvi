import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import ColorModeSwitcher from './components/ColorModeSwitcher';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeSwitcher />
        </ChakraProvider>
    );
};

export default App;
