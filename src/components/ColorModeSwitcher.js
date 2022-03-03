import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            size="md"
            color="current"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            icon={<SwitchIcon />}
            onClick={toggleColorMode}
            {...props}
        />
    );
};

export default ColorModeSwitcher;
