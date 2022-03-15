import React from 'react';
import {
    Circle,
    Divider,
    Flex,
    Grid,
    Heading,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaHeart, FaListAlt, FaSearch, FaUser } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';

const features = [
    {
        description:
            'Discover new movies by searching or browsing through our categories',
        icon: FaSearch,
    },
    {
        description:
            'Leave a "like" to save all of your favorite movies in one place',
        icon: FaHeart,
    },
    {
        description:
            'Keep track of movies that you want to want to see with a personal watchlist',
        icon: FaListAlt,
    },
    {
        description:
            'Connect with your TMDB account through third party authentication',
        icon: FaUser,
    },
];

const FeatureSection = () => {
    const cardColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const circleColor = useColorModeValue('teal.400', 'teal.300');

    return (
        <Flex flexDir="column" align="center" rowGap="32px">
            <Flex align="center" columnGap="8px">
                <Text fontSize={['36px', '36px', '48px', '48px']}>With</Text>
                <Flex align="center">
                    <Icon
                        as={RiMovie2Line}
                        w={['44px', '44px', '56px', '56px']}
                        h={['44px', '44px', '56px', '56px']}
                    />
                    <Heading fontSize={['48px', '48px', '60px', '60px']}>
                        MUVI
                    </Heading>
                </Flex>
                <Text fontSize={['36px', '36px', '48px', '48px']}>
                    , you can...
                </Text>
            </Flex>
            <Grid
                templateColumns={[
                    '48% 48%',
                    '48% 48%',
                    '24% 24% 24% 24%',
                    '24% 24% 24% 24%',
                ]}
                justifyContent="space-between"
                rowGap="16px"
                w="100%"
            >
                {features.map((feature) => (
                    <Flex
                        flexDir="column"
                        align="center"
                        gap={['16px', '16px', '24px', '24px']}
                        px={['16px', '16px', '24px', '24px']}
                        py={['24px', '24px', '36px', '48px']}
                        border="1px"
                        borderColor={borderColor}
                        borderRadius="8px"
                        background={cardColor}
                        key={feature.description}
                    >
                        <Circle
                            background={circleColor}
                            size={['48px', '48px', '60px', '60px']}
                        >
                            <Icon
                                as={feature.icon}
                                w={['16px', '16px', '24px', '24px']}
                                h={['16px', '16px', '24px', '24px']}
                                color="white"
                            />
                        </Circle>
                        <Divider />
                        <Text fontSize={['16px', '16px', '18px', '18px']}>
                            {feature.description}
                        </Text>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    );
};

export default FeatureSection;
