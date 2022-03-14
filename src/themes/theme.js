import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1536px',
});

const theme = extendTheme({ breakpoints });

export default theme;
