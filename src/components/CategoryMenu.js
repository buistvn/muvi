import React from 'react';
import { useRouter } from 'next/router';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChartLine, FaChevronDown, FaPlay, FaStar } from 'react-icons/fa';

const CategoryMenu = ({ categories, setPage }) => {
    const router = useRouter();

    const handleClick = (category) => {
        router.push(`/movies/${category}?page=1`);
    };

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Category
            </MenuButton>
            <MenuList>
                <MenuItem
                    icon={<FaChartLine />}
                    onClick={() => handleClick(categories.POPULAR.pathname)}
                >
                    Popular
                </MenuItem>
                <MenuItem
                    icon={<FaStar />}
                    onClick={() => handleClick(categories.TOP_RATED.pathname)}
                >
                    Top Rated
                </MenuItem>
                <MenuItem
                    icon={<FaPlay />}
                    onClick={() => handleClick(categories.NOW_PLAYING.pathname)}
                >
                    Now Playing
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CategoryMenu;
